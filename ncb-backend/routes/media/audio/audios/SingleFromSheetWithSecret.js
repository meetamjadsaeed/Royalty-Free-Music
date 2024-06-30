var express = require("express");
var router = express.Router();

const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");
const crypto = require("crypto");
const { promisify } = require("util");

const pbkdf2Async = promisify(crypto.pbkdf2);

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const TOKEN_PATH = path.join(process.cwd(), "token.json");
const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

async function listMajors(auth, id) {
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: "",
    range: "Musics",
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log("No data found.");
    return null;
  }
  const headers = rows[0];
  const idIndex = headers.indexOf("MediaId"); // Assuming "MediaId" is the column header for IDs
  if (idIndex === -1) {
    console.log("ID column not found.");
    return null;
  }
  const row = rows.find((row) => row[idIndex] === id);
  if (!row) {
    console.log(`ID ${id} not found.`);
    return null;
  }
  const result = headers.reduce((obj, header, index) => {
    obj[header] = row[index];
    return obj;
  }, {});
  return result;
}

/* GET single media from google sheet with key. */
router.get("/", async function (req, res, next) {
  try {
    const auth = await authorize();
    const mediaId = req.query.id;
    // const id = "3921";
    const majors = await listMajors(auth, mediaId);

    // Generate a random key
    const apiKey = "";

    // Set the generated key as a response header
    res.setHeader("X-Key", apiKey);

    // Check if the request contains a matching key
    const requestKey = req.header("X-Key");
    if (requestKey === apiKey) {
      res.send(majors);
    } else {
      res.send("Unauthorized");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
