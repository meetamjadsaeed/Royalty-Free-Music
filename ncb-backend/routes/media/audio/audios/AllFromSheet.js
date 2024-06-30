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
// const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
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

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
// async function listMajors(auth) {
//     const sheets = google.sheets({ version: 'v4', auth });
//     const response = await sheets.spreadsheets.values.batchGet({
//         spreadsheetId: '1qUxSfuoFUOWc45-37aod8WSAVOJe3uvq2mvRJqnkMmU',
//         ranges: ['Musics!A:N'],
//         majorDimension: 'ROWS',
//         dateTimeRenderOption: 'FORMATTED_STRING',
//     });
//     const rows = response.data.valueRanges[0].values;

//     // Apply a filter to the sheet to retrieve only rows with "all" or "All" in column D
//     const filter = {
//         range: {
//             sheetId: response.data.valueRanges[0].sheetId,
//             startRowIndex: 1, // Start at row 2 to exclude headers
//             endRowIndex: rows.length,
//             startColumnIndex: 3, // Column D
//             endColumnIndex: 4, // Column D
//         },
//         criteria: {
//             0: {
//                 condition: {
//                     type: 'TEXT_EQ',
//                     values: [{ userEnteredValue: 'all' }, { userEnteredValue: 'All' }],
//                 },
//             },
//         },
//     };
//     await sheets.spreadsheets.batchUpdate({
//         spreadsheetId: '1qUxSfuoFUOWc45-37aod8WSAVOJe3uvq2mvRJqnkMmU',
//         resource: {
//             requests: [{ setBasicFilter: { filter } }],
//         },
//     });

//     // Retrieve the filtered rows
//     const filteredResponse = await sheets.spreadsheets.values.get({
//         spreadsheetId: '1qUxSfuoFUOWc45-37aod8WSAVOJe3uvq2mvRJqnkMmU',
//         range: 'Musics!A:N',
//     });
//     const filteredRows = filteredResponse.data.values;
//     if (!filteredRows || filteredRows.length === 0) {
//         console.log('No data found.');
//         return [];
//     }
//     const headers = filteredRows[0];
//     const values = filteredRows.slice(1);
//     const results = values.map(row => {
//         return headers.reduce((obj, header, index) => {
//             obj[header] = row[index];
//             return obj;
//         }, {});
//     });
//     return results;
// }

async function listMajors(auth) {
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: "",
    range: "Musics",
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log("No data found.");
    return [];
  }
  const headers = rows[0];
  const values = rows.slice(1);
  const results = values.map((row) => {
    return headers.reduce((obj, header, index) => {
      obj[header] = row[index];
      return obj;
    }, {});
  });
  return results;
}

// Set the AES key and IV
// const key = crypto.randomBytes(32); // Generate a random key
// const iv = crypto.randomBytes(16); // Generate a random IV

/* GET media from google sheet. */
router.get("/", async function (req, res, next) {
  try {
    // const auth = await authorize();
    // const majors = await listMajors(auth);
    // const data = {};
    // data.data = majors;

    // const filterData = data.data.filter((media) => media.MediaGenre === "all" && media.MediaMood === "all" && media.MediaMovement === "all" && media.MediaInstrument === "all" && media.MediaTheme === "whatever" && media.DownloadAvailable === "yes");

    res.send("Unauthorized");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

/* GET media from google sheet with params. */
// router.get('/filter', async function (req, res, next) {
//     const data = {};
//     try {
//         const auth = await authorize();
//         const majors = await listMajors(auth);
//         // Get the values of the query parameters
//         const mediaGenre = req.query.MediaGenre;
//         const mediaMood = req.query.MediaMood;
//         data.data = majors; // Add the 'data' array to the 'data' object
//         res.send(data); // Send the 'data' object as the response
//     } catch (err) {
//         console.error(err);
//     }
// });

module.exports = router;
