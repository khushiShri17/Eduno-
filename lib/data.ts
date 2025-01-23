import type { SubjectResources } from "./types";

export const subjects = [
  // 2nd Semester
  { id: "m2", name: "Mathematics-II" },
  { id: "ep", name: "Engineering Physics" },
  
  // 3rd Semester
  { id: "eee", name: "Energy & Environmental Engineering" },
  { id: "dm", name: "Discrete Mathematics" },
  { id: "ds", name: "Data Structures" },
  { id: "oop", name: "Object Oriented Programming & Methodology" },
  { id: "dcs", name: "Digital Circuit System" }
];

export const subjectResources: Record<string, SubjectResources> = {
  // 2nd Semester Subjects
  "m2": {
    notes: {
      rgpv: [
        {
          "id": "m2-notes-rgpv-1",
          "title": "Unit 1 - M2",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1MzOi-Db2bHgMWg3d16NQ-NGAWrusJnjm/view?usp=drive_link"
        },
        {
          "id": "m2-notes-rgpv-2",
          "title": "Unit 2 - M2",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1Lxk9ImhlhNph4kkEZjd9haNnJMrk7M6G/view?usp=drive_link"
        },
        {
          "id": "m2-notes-rgpv-3",
          "title": "Unit 3 - M2",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1amE8vyLYquNLhatdaxzfDvjwMuEtybJE/view?usp=drive_link"
        },
        {
          "id": "m2-notes-rgpv-4",
          "title": "Unit 4 - M2",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1dU2ObcdpHSNG4MinmVEFnRyvP3WG3sx0/view?usp=drive_link"
        },
        {
          "id": "m2-notes-rgpv-5",
          "title": "Unit 5 - M2",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1gsUcEtnCgzF2xdT94SVCSP1Pg2LsZxiV/view?usp=drive_link"
        }
      ],
      college: [
        {
          "id": "m2-notes-eduno-1",
          "title": "Unit 1 - M2",
          "contributor": "Eduno Team",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1JnFCCB945MbkGxjqnrO87tWBHkMKV76e/view?usp=drive_link"
        },
        {
          "id": "m2-notes-eduno-2",
          "title": "Unit 2 - M2",
          "contributor": "Eduno Team",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1ww1Vwq7P4FpQgyamx3rP5qvDkuD6kB1D/view?usp=drive_link"
        },
        {
          "id": "m2-notes-eduno-3",
          "title": "Unit 3 - M2",
          "contributor": "Eduno Team",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1rR1RH6adMniY4yKVNMiy4p_14fSap-Gy/view?usp=drive_link"
        },
        {
          "id": "m2-notes-eduno-4",
          "title": "Unit 4 - M2",
          "contributor": "Eduno Team",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1hEr6VmYS0kQ4YbDUVldbLxYJ2rdPPlVk/view?usp=drive_link"
        },
        {
          "id": "m2-notes-eduno-5",
          "title": "Unit 5 - M2",
          "contributor": "Eduno Team",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1a_uXbVuo0pJ2a7e-oHRQg7bu6nKlm3UY/view?usp=drive_link"
        }
      ]
      
    },
    pyq: {
      yearWise: [
        {
          "id": "m2-pyq-2024-1",
          "title": "M2 PYQ June 24",
          "year": "June 24",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/13ko8Lq0s3btbKAV2-hQMtI0taxu_1rNj/view?usp=drive_link"
        },
        {
          "id": "m2-pyq-2023-2",
          "title": "M2 PYQ Dec 23",
          "year": "Dec 23",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1z48pU3OMlJjTxd6jSQETQ22dWLELaVod/view?usp=drive_link"
        },
        {
          "id": "m2-pyq-2023-1",
          "title": "M2 PYQ June 23",
          "year": "June 23",
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1e3fiJ-QOFfzkbim_8KC5F_JIwtfq0q5A/view?usp=drive_link"
        }
      ],
      unitWise: [
        {
          "id": "m2-pyq-unit-1",
          "title": "M2 Unit 1 PYQ - Eduno",
          "unit": 1,
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1D9Fw8iIiVIT05dIyDRkW4Eo-w7y3RJTW/view?usp=drive_link"
        },
        {
          "id": "m2-pyq-unit-2",
          "title": "M2 Unit 2 PYQ - Eduno",
          "unit": 2,
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1pXALjwKtThuWOwY9J0vQT61dAfMkeeWb/view?usp=drive_link"
        },
        {
          "id": "m2-pyq-unit-3",
          "title": "M2 Unit 3 PYQ - Eduno",
          "unit": 3,
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1v-PfJlOwEpzHwDKqjgF6-spjuZ7YVAvN/view?usp=drive_link"
        },
        {
          "id": "m2-pyq-unit-4",
          "title": "M2 Unit 4 PYQ - Eduno",
          "unit": 4,
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1tsDsijB-XMYAiyxOv8WY1dyja9vjNtw7/view?usp=drive_link"
        },
        {
          "id": "m2-pyq-unit-5",
          "title": "M2 Unit 5 PYQ - Eduno",
          "unit": 5,
          "subjectCode": "BT 202",
          "subjectName": "Mathematics-II",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/13ks7bap9_YEENPd71lLknNyEX67ARnoa/view?usp=drive_link"
        }
      ]
      
    },
    content: [
      {
        "id": "m2-content-1",
        "title": "Vijendra Sir (Playlist)",
        "type": "Video Content",
        "uploadedBy": "Vijendra Sir",
        "uploadedOn": "2024-03-20",
        "subjectCode": "BT 202",
        "subjectName": "Mathematics-II",
        "department": "Basic Science",
        "semester": 2,
        "fileType": "Video",
        "videoUrl": "https://youtube.com/playlist?list=PLr1ypW0YWS45DBNwDXwbmv7FxchTJiOQa&si=mPHanwDhTc2pay3w"
      },
      {
        "id": "m2-content-2",
        "title": "Gajendra Purohit Sir (Playlist)",
        "type": "Video Content",
        "uploadedBy": "Gajendra Purohit Sir",
        "uploadedOn": "2024-03-20",
        "subjectCode": "BT 202",
        "subjectName": "Mathematics-II",
        "department": "Basic Science",
        "semester": 2,
        "fileType": "Video",
        "videoUrl": "https://youtube.com/playlist?list=PLU6SqdYcYsfKqa52m3wyMZb1KVWuZsA2T&si=yGc88IwI0KCQMIe1"
      }
    ],
    important: []
  },
  // Other subjects with empty arrays
  "ep": {
    notes: { rgpv: 
      [
        {
          "id": "physics-unit-1",
          "title": "Unit 1 - Engineering Physics",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1Ljm15ADVPvMOw5DwbGqRgaP9-s5zLXJ_/view?usp=drive_link"
        },
        {
          "id": "physics-unit-2",
          "title": "Unit 2 - Engineering Physics",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1nf1m31K1hVmPIZQ_ndujgVpy8TXgi-SX/view?usp=drive_link"
        },
        {
          "id": "physics-unit-3",
          "title": "Unit 3 - Engineering Physics",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1ykPb7Cf3N3y66lBkqKKA96uhzaWl8LHm/view?usp=drive_link"
        },
        {
          "id": "physics-unit-4",
          "title": "Unit 4 - Engineering Physics",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1cGSVFH-SAzaVe-E7JULaw9a95GgCDqcf/view?usp=drive_link"
        },
        {
          "id": "physics-unit-5",
          "title": "Unit 5 - Engineering Physics",
          "contributor": "RGPV Notes",
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/13tPgnSKun25veKKoYXQL9pO8BO-05NC2/view?usp=drive_link"
        }
      ],
      college: [] },
    pyq: { yearWise: 
      [
        {
          "id": "ep-pyq-dec-23",
          "title": "EP PYQ December 2023",
          "year": "Dec 23",
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1uYfMmntkF5GAO04YL1mOYTEfn_9qfhBA/view?usp=drive_link"
        },
        {
          "id": "ep-pyq-jun-23",
          "title": "EP PYQ June 2023",
          "year": "Jun 23",
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1KxG9FhOp4PBKKSZkAWmg-1eySnr9C51s/view?usp=drive_link"
        },
        {
          "id": "ep-pyq-jun-24",
          "title": "EP PYQ June 2024",
          "year": "Jun 24",
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1lIO_wJAYAZTxcecBpTXwe_g6MG7tHAFq/view?usp=drive_link"
        },
        {
          "id": "ep-pyq-nov-22",
          "title": "EP PYQ November 2022",
          "year": "Nov 22",
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1wJvxE2pnM-5mT7_kWgUJT7llSm8X_BhG/view?usp=drive_link"
        }
      ],
      unitWise: 
      [
        {
          "id": "ep-pyq-unit-1",
          "title": "EP Unit 1 PYQ - Eduno",
          "unit": 1,
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1kYbazZdS1j86Njs2RemIMXP_jp2UPWyO/view?usp=drive_link"
        },
        {
          "id": "ep-pyq-unit-2",
          "title": "EP Unit 2 PYQ - Eduno",
          "unit": 2,
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1A3GB3r66Wo-sFCVPPwtOyMsjJnp6A2_M/view?usp=drive_link"
        },
        {
          "id": "ep-pyq-unit-3",
          "title": "EP Unit 3 PYQ - Eduno",
          "unit": 3,
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/18r7mLu8GLOG1orJ4ICRpEwvRz9MMS64e/view?usp=drive_link"
        },
        {
          "id": "ep-pyq-unit-4",
          "title": "EP Unit 4 PYQ - Eduno",
          "unit": 4,
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1gHFKs3mfbXgpdIZCu_l6l0JzIvejWjzC/view?usp=drive_link"
        },
        {
          "id": "ep-pyq-unit-5",
          "title": "EP Unit 5 PYQ - Eduno",
          "unit": 5,
          "subjectCode": "BT 201",
          "subjectName": "Engineering Physics",
          "department": "Basic Science",
          "semester": 2,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1nN3n77WtVEyAjLDKzlYpwF-RlfYo-5Sn/view?usp=drive_link"
        }
      ]
       },
    content: [
      {
        "id": "ep-content-1",
        "title": "Er Sahil Ka Gyan (Playlist)",
        "type": "Video Content",
        "uploadedBy": "Er Sahil",
        "uploadedOn": "2024-03-20",
        "subjectCode": "BT 201",
        "subjectName": "Engineering Physics",
        "department": "Basic Science",
        "semester": 2,
        "fileType": "Video",
        "videoUrl": "https://youtube.com/playlist?list=PLuAADu3OvBt495Awir13ZNM-gv5IwLGQy&si=Flshu7MA84d1DQY_"
      },
      {
        "id": "ep-content-2",
        "title": "All About Engineering (Playlist)",
        "type": "Video Content",
        "uploadedBy": "All About Engineering",
        "uploadedOn": "2024-03-20",
        "subjectCode": "BT 201",
        "subjectName": "Engineering Physics",
        "department": "Basic Science",
        "semester": 2,
        "fileType": "Video",
        "videoUrl": "https://youtube.com/playlist?list=PLEYBvmdYQH_b3GqXdz2Z377qWNUTOQPCC&si=zL9nmjDNyDkfQQF5"
      }
    ],
    important: []
  },
  "eee": {
    notes: { rgpv: [
      {
        "id": "eee-notes-rgpv-1",
        "title": "Unit 1 - EEE",
        "contributor": "RGPV NOTES",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1GuQTAlunlz3OD3ljUfuXgwklYwqxAScn/view?usp=drive_link"
      },
      {
        "id": "eee-notes-rgpv-2",
        "title": "Unit 2 - EEE",
        "contributor": "RGPV NOTES",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1lXgNYpA5wIUUh0Kh9RJFk9kYRNC82Pr9/view?usp=drive_link"
      },
      {
        "id": "eee-notes-rgpv-3",
        "title": "Unit 3 - EEE",
        "contributor": "RGPV NOTES",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1b0tF076FUrifgXzpzWveGp2WYKnt4LN3/view?usp=drive_link"
      },
      {
        "id": "eee-notes-rgpv-4",
        "title": "Unit 4 - EEE",
        "contributor": "RGPV NOTES",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1FJ7_-fJu0DosmS5YxM7ChOtxAxcHQyjd/view?usp=drive_link"
      },
      {
        "id": "eee-notes-rgpv-5",
        "title": "Unit 5 - EEE",
        "contributor": "RGPV NOTES",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1nMC9_pb8GQ7TrUAsIpP1m0x6y_e_SuXw/view?usp=drive_link"
      }
    ], 
    college: [
      {
        "id": "eee-notes-eduno-1-1",
        "title": "Unit 1 Part 1 - EEE",
        "contributor": "Eduno Team",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1UoY5daMWvrjx1nkkjwhT2GRQrtW4Pu8E/view?usp=drive_link"
      },
      {
        "id": "eee-notes-eduno-1-2",
        "title": "Unit 1 Part 2 - EEE",
        "contributor": "Eduno Team",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1aw6LGOPnx3L_dfiFFXjjWbo91wOUTM9I/view?usp=drive_link"
      },
      {
        "id": "eee-notes-eduno-2-1",
        "title": "Unit 2 Ecological Succession - EEE",
        "contributor": "Eduno Team",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1NbTxJ79SbfGSZbpb5kd5gmg6e0AxrDpN/view?usp=drive_link"
      },
      {
        "id": "eee-notes-eduno-2-2",
        "title": "Unit 2 - EEE",
        "contributor": "Eduno Team",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1IKpOUlmRBNOcw2Tvt8oz90ca4LgicnkL/view?usp=drive_link"
      },
      {
        "id": "eee-notes-eduno-3",
        "title": "Unit 3 - EEE",
        "contributor": "Eduno Team",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1gqfSGZ3QAUJAQyP8QPlC1UGrc3vghAwn/view?usp=drive_link"
      },
      {
        "id": "eee-notes-eduno-4",
        "title": "Unit 4 - EEE",
        "contributor": "Eduno Team",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1g4y6ZkYfWkPQ9-Q2FworB8XBT3y_oes6/view?usp=drive_link"
      },
      {
        "id": "eee-notes-eduno-5",
        "title": "Unit 5 - EEE",
        "contributor": "Eduno Team",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1m7wMHSgAE9b7QkBQZUZQsPgPRK8S2Dt_/view?usp=drive_link"
      }
    ]
     },
    pyq: { yearWise: 
      [
        {
          "id": "eee-pyq-2024-1",
          "title": "EEE PYQ June 24",
          "year": "June 24",
          "subjectCode": "ES-301",
          "subjectName": "EEE",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/15rURZzufHbbCeqLrwVewSyMP1e6FKuoX/view?usp=drive_link"
        },
        {
          "id": "eee-pyq-2023-2",
          "title": "EEE PYQ Dec 23",
          "year": "Dec 23",
          "subjectCode": "ES-301",
          "subjectName": "EEE",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1AZ7LIrKIu1MLt6bptRmoI4IeVrgz65ft/view?usp=drive_link"
        },
        {
          "id": "eee-pyq-2023-1",
          "title": "EEE PYQ June 23",
          "year": "June 23",
          "subjectCode": "ES-301",
          "subjectName": "EEE",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1I0PkiQYQys2V7bUtnNN_Uzl6xSprnmXP/view?usp=drive_link"
        },
        {
          "id": "eee-pyq-2022-1",
          "title": "EEE PYQ Nov 22",
          "year": "Nov 22",
          "subjectCode": "ES-301",
          "subjectName": "EEE",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1Xd_xJ5UKOKo5N42vHQK4Nao9ESHjnkEz/view?usp=drive_link"
        }
      ],
       unitWise: 
       [
        {
          "id": "eee-pyq-unit-1",
          "title": "EEE Unit 1 PYQ - Eduno",
          "unit": 1,
          "subjectCode": "ES-301",
          "subjectName": "EEE",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1id3-sDhFoMUlcdvD2uZCYr_AAxBf6NKB/view?usp=drive_link"
        },
        {
          "id": "eee-pyq-unit-2",
          "title": "EEE Unit 2 PYQ - Eduno",
          "unit": 2,
          "subjectCode": "ES-301",
          "subjectName": "EEE",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1FPD1CY37Jer9OEn3nQvCq_Gtvyw7lu5M/view?usp=drive_link"
        },
        {
          "id": "eee-pyq-unit-3",
          "title": "EEE Unit 3 PYQ - Eduno",
          "unit": 3,
          "subjectCode": "ES-301",
          "subjectName": "EEE",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1hMeZs8VNNYt4iNcaofq1pgihffgQkUi-/view?usp=drive_link"
        },
        {
          "id": "eee-pyq-unit-4",
          "title": "EEE Unit 4 PYQ - Eduno",
          "unit": 4,
          "subjectCode": "ES-301",
          "subjectName": "EEE",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1vuW_zfpc5aHrfuTWZejfdpgnorYzP8fV/view?usp=drive_link"
        },
        {
          "id": "eee-pyq-unit-5",
          "title": "EEE Unit 5 PYQ - Eduno",
          "unit": 5,
          "subjectCode": "ES-301",
          "subjectName": "EEE",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/13B7U_cqKcGSZ0dE2exZAKYq8R9gh9wl2/view?usp=drive_link"
        }
      ]
       },
    content: [
      {
        "id": "eee-content-1",
        "title": "RGPV Official Playlist",
        "type": "Video Content",
        "uploadedBy": "RGPV",
        "uploadedOn": "2024-03-20",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtube.com/playlist?list=PLL7liBDYa4YaJ538RmxMWJnZYrKX9Tbi8&si=lI3emdeuG-Lguxqc"
      },
      {
        "id": "eee-content-2",
        "title": "AB Classes",
        "type": "Video Content",
        "uploadedBy": "AB Classes",
        "uploadedOn": "2024-03-20",
        "subjectCode": "ES-301",
        "subjectName": "EEE",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtube.com/playlist?list=PLbkIghvjQ7P-UXDAn1vA69Fl2nxdicusP&si=QELtA84XJgYXXag_"
      }
    ],
    important: []
  },
  "dm": {
    notes: { rgpv: 
      [
        {
          "id": "ds-notes-rgpv-1",
          "title": "Unit 1 - Discrete Mathematics",
          "contributor": "RGPV NOTES",
          "subjectCode": "IT 302",
          "subjectName": "Discrete Mathematics",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/13oAshVlXymTjSyl-YMDSDoEph60d7sU7/view?usp=drive_link"
        },
        {
          "id": "ds-notes-rgpv-2",
          "title": "Unit 2 - Discrete Mathematics",
          "contributor": "RGPV NOTES",
          "subjectCode": "IT 302",
          "subjectName": "Discrete Mathematics",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1F3CDJYsjagIjG4iyEQhcNeSVxHpeslrU/view?usp=drive_link"
        },
        {
          "id": "ds-notes-rgpv-3",
          "title": "Unit 3 - Discrete Mathematics",
          "contributor": "RGPV NOTES",
          "subjectCode": "IT 302",
          "subjectName": "Discrete Mathematics",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1sBAqjdSp0sTo_yGQdTfAWzJxnGZ7dD2t/view?usp=drive_link"
        },
        {
          "id": "ds-notes-rgpv-4",
          "title": "Unit 4 - Discrete Mathematics",
          "contributor": "RGPV NOTES",
          "subjectCode": "IT 302",
          "subjectName": "Discrete Mathematics",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1lZwg0IsADWn2Z0IDAOCDD-IqqVd5AkLf/view?usp=drive_link"
        },
        {
          "id": "ds-notes-rgpv-5",
          "title": "Unit 5 - Discrete Mathematics",
          "contributor": "RGPV NOTES",
          "subjectCode": "IT 302",
          "subjectName": "Discrete Mathematics",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1hThS905UGKLVPFw97_heg6uM8TmQ6Ii7/view?usp=drive_link"
        }
      ],
      college: 
      [
        {
          "id": "ds-notes-eduno-1",
          "title": "Unit 1 - Discrete Mathematics",
          "contributor": "Eduno Team",
          "subjectCode": "IT 302",
          "subjectName": "Discrete Mathematics",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1VcoFAaFogcVhSvm3qFWTdyQbGCKHFjso/view?usp=drive_link"
        },
        {
          "id": "ds-notes-eduno-2",
          "title": "Unit 2 - Discrete Mathematics",
          "contributor": "Eduno Team",
          "subjectCode": "IT 302",
          "subjectName": "Discrete Mathematics",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1ITog_4uo4DiJFiZUdl2IvXyNGZQSU3oo/view?usp=drive_link"
        },
        {
          "id": "ds-notes-eduno-3",
          "title": "Unit 3 & 4 - Discrete Mathematics",
          "contributor": "Eduno Team",
          "subjectCode": "IT 302",
          "subjectName": "Discrete Mathematics",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/1zT3Gl5yTF_N555o6LM-B9YpjAqdqMzPr/view?usp=drive_link"
        },
        {
          "id": "ds-notes-eduno-4",
          "title": "Unit 5 - Discrete Mathematics",
          "contributor": "Eduno Team",
          "subjectCode": "IT 302",
          "subjectName": "Discrete Mathematics",
          "department": "Information Technology",
          "semester": 3,
          "fileType": "PDF",
          "pdfUrl": "https://drive.google.com/file/d/138rP4TRJxfRqBwAaxcu1MnucHLfNvcD7/view?usp=drive_link"
        }
      ]
       },
    pyq: { yearWise: [
      {
        "id": "ds-pyq-eduno-1",
        "title": "DS PYQ June 24",
        "year": "June 24",
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/13kxB2fI4SlMjsIWxourUOjggOqgoCJ2s/view?usp=drive_link"
      },
      {
        "id": "ds-pyq-eduno-2",
        "title": "DS PYQ June 23",
        "year": "June 23",
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/15qfbqDolGJw3-QnKXocG74AaA5Ct7qbd/view?usp=drive_link"
      },
      {
        "id": "ds-pyq-eduno-3",
        "title": "DS PYQ Dec 23",
        "year": "Dec 23",
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1_t17ixXht8I0A4FoT5KxLHiCaPPlr6kF/view?usp=drive_link"
      }
    ],
    unitWise: [
      {
        "id": "ds-pyq-unit-1",
        "title": "DS Unit 1 PYQ - Eduno",
        "unit": 1,
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1VcoFAaFogcVhSvm3qFWTdyQbGCKHFjso/view?usp=drive_link"
      },
      {
        "id": "ds-pyq-unit-2",
        "title": "DS Unit 2 PYQ - Eduno",
        "unit": 2,
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1ITog_4uo4DiJFiZUdl2IvXyNGZQSU3oo/view?usp=drive_link"
      },
      {
        "id": "ds-pyq-unit-3-4",
        "title": "DS Unit 3 & 4 PYQ - Eduno",
        "unit": 3.4,
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1zT3Gl5yTF_N555o6LM-B9YpjAqdqMzPr/view?usp=drive_link"
      },
      {
        "id": "ds-pyq-unit-5",
        "title": "DS Unit 5 PYQ - Eduno",
        "unit": 5,
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/138rP4TRJxfRqBwAaxcu1MnucHLfNvcD7/view?usp=drive_link"
      }
    ]
     },
    content: [
      {
        "id": "ds-content-1",
        "title": "Knowledge Gate (One Shot)",
        "type": "Video Content",
        "uploadedBy": "Knowledge Gate",
        "uploadedOn": "2024-03-20",
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtu.be/3zOtLEeHygg?si=5Wr4OJldriRNnAFw"
      },
      {
        "id": "ds-content-2",
        "title": "5 Minutes Engineering (One Shot)",
        "type": "Video Content",
        "uploadedBy": "5 Minutes Engineering",
        "uploadedOn": "2024-03-20",
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtu.be/papVRQqtrgc?si=VcGzVrlNcAxkopcs"
      },
      {
        "id": "ds-content-3",
        "title": "Gajendra Purohit (Playlist)",
        "type": "Video Content",
        "uploadedBy": "Gajendra Purohit",
        "uploadedOn": "2024-03-20",
        "subjectCode": "IT 302",
        "subjectName": "Discrete Mathematics",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtube.com/playlist?list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&si=N1KwYQ7KqouAsZRf"
      }
    ],
    important: []
  },
  "ds": {
    notes: { rgpv: [
      {
        "id": "dsa-unit-1-rgpv",
        "title": "Unit 1 - DSA",
        "contributor": "RGPV NOTES",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/13zqu2peKLy_PmVXAqzO3vPJvPsK_dQzM/view?usp=drive_link"
      },
      {
        "id": "dsa-unit-2-rgpv",
        "title": "Unit 2 - DSA",
        "contributor": "RGPV NOTES",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1vtk-81x7kPfGnn2jDOkmAQvF6T_v8YBR/view?usp=drive_link"
      }
    ],
    college: [
      {
        "id": "dsa-unit-1-eduno",
        "title": "Unit 1 - DSA",
        "contributor": "EDUNO Team",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1lDQws2ovxUdKRay6sBOSvZbQQ1fXoiig/view?usp=drive_link"
      },
      {
        "id": "dsa-unit-2-eduno",
        "title": "Unit 2 - DSA",
        "contributor": "EDUNO Team",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1NiZmMiawipmqT_FXn7fFSaHoS7KLLAux/view?usp=drive_link"
      },
      {
        "id": "dsa-unit-3-eduno",
        "title": "Unit 3 - DSA",
        "contributor": "EDUNO Team",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1KmFWqTZHaOXCzSVaXdRFukvmTKbk3BMB/view?usp=drive_link"
      },
      {
        "id": "dsa-unit-4-eduno",
        "title": "Unit 4 - DSA",
        "contributor": "EDUNO Team",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1gFygudX61a_wK39siY5sDOJHSZJFOgjI/view?usp=drive_link"
      },
      {
        "id": "dsa-unit-5-eduno",
        "title": "Unit 5 - DSA",
        "contributor": "EDUNO Team",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1VegquVADuU3FRGj9RZ-bzYpyrmxkAnoc/view?usp=drive_link"
      }
    ]
     },
    pyq: { yearWise: [
      {
        "id": "dsa-pyq-2023-nov",
        "title": "DSA PYQ Nov 23",
        "year": "Nov 23",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1CL2u-Pk5g1g3ZJCv2H6b-Tod-Mma1Ha2/view?usp=drive_link"
      },
      {
        "id": "dsa-pyq-2022-nov",
        "title": "DSA PYQ Nov 22",
        "year": "Nov 22",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1-0dE0lUJ1J2cA8Dg4-tL8sqTZNYftSmy/view?usp=drive_link"
      },
      {
        "id": "dsa-pyq-2024-june",
        "title": "DSA PYQ June 24",
        "year": "June 24",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1-ppSGSeRI5F5rUtHx--olZemfI3DwWmJ/view?usp=drive_link"
      }
    ],
    unitWise: [
      {
        "id": "dsa-pyq-unit-1",
        "title": "DSA Unit 1 PYQ - Eduno",
        "unit": 1,
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1pTXhYTo5VuigrCI1istKUxlT6vrjX526/view?usp=drive_link"
      },
      {
        "id": "dsa-pyq-unit-2",
        "title": "DSA Unit 2 PYQ - Eduno",
        "unit": 2,
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1TCJhG9KDaxE3XxZXkGG2MssyVrX9Xhmi/view?usp=drive_link"
      },
      {
        "id": "dsa-pyq-unit-3",
        "title": "DSA Unit 3 PYQ - Eduno",
        "unit": 3,
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1tlt8aXiyRyZIySGpwwVEeKZaTnW1alsd/view?usp=drive_link"
      },
      {
        "id": "dsa-pyq-unit-4",
        "title": "DSA Unit 4 PYQ - Eduno",
        "unit": 4,
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1TDh-mDR6_6LAr5rKjotzN7ATqZxLYM2j/view?usp=drive_link"
      },
      {
        "id": "dcs-pyq-unit-5",
        "title": "DCS Unit 5 PYQ - Eduno",
        "unit": 5,
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1f1RfbruN3v0FV_Yb5fKqs9-IVFPXXxRo/view?usp=drive_link"
      }
    ]
     },
    content: [
      {
        "id": "dsa-content-knowledge-gate",
        "title": "Knowledge Gate (One Shot)",
        "type": "Video Content",
        "uploadedBy": "Knowledge Gate",
        "uploadedOn": "2024-01-23",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtu.be/MdG0Vw9f1A4?si=iru_6-p3skFXfbBv"
      },
      {
        "id": "dsa-content-5min-engineering",
        "title": "5 Minutes Engineering (One Shot)",
        "type": "Video Content",
        "uploadedBy": "5 Minutes Engineering",
        "uploadedOn": "2024-01-23",
        "subjectCode": "IT 303",
        "subjectName": "Data Structures and Algorithms",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtu.be/J0OvDNmAWNw?si=IRPt2Jmw_6htKS0R"
      }
    ],
    important: []
  },
  "oop": {
    notes: { rgpv: [
      {
        "id": "oopm-notes-rgpv-1",
        "title": "Unit 1 - Object-Oriented Programming Methodology",
        "contributor": "RGPV NOTES",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1yuAQ0figjSulHYsGf6TRrffiS9xjOgj1/view?usp=drive_link"
      },
      {
        "id": "oopm-notes-rgpv-2",
        "title": "Unit 2 - Object-Oriented Programming Methodology",
        "contributor": "RGPV NOTES",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1mQnio19JDYdsP2t5KNvDGPygceb9RkTz/view?usp=drive_link"
      },
      {
        "id": "oopm-notes-rgpv-3",
        "title": "Unit 3 - Object-Oriented Programming Methodology",
        "contributor": "RGPV NOTES",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1zzC6XwpuGR7mbLbKlaQk4j4TV8sFMNre/view?usp=drive_link"
      },
      {
        "id": "oopm-notes-rgpv-4",
        "title": "Unit 4 - Object-Oriented Programming Methodology",
        "contributor": "RGPV NOTES",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1QnLwcDpgtWHA7EB7N1zkny-2UzJHH6_4/view?usp=drive_link"
      },
      {
        "id": "oopm-notes-rgpv-5",
        "title": "Unit 5 - Object-Oriented Programming Methodology",
        "contributor": "RGPV NOTES",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1L9riW5UowrFWblhfbny53YNjxHpEBHAS/view?usp=drive_link"
      }
    ],
    college: [
      {
        "id": "oopm-notes-eduno-1",
        "title": "Unit 1 - OOPM",
        "contributor": "Eduno Team",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1hNBDOkySp3pn03eiKi2218L7Ak4DIBoN/view?usp=drive_link"
      },
      {
        "id": "oopm-notes-eduno-2",
        "title": "Unit 2 - OOPM",
        "contributor": "Eduno Team",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1p-6QIgy6Nod6-2FXGcqiG1vlrDgeT3Ks/view?usp=drive_link"
      },
      {
        "id": "oopm-notes-eduno-3",
        "title": "Unit 3 - OOPM",
        "contributor": "Eduno Team",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1TY2pab_UEFoDnMSLouc6PW5NUR-GFEX-/view?usp=drive_link"
      },
      {
        "id": "oopm-notes-eduno-4",
        "title": "Unit 4 - OOPM",
        "contributor": "Eduno Team",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1l5hvnANqPS9c8LlbN4hSKAFWGuTVnHSW/view?usp=drive_link"
      },
      {
        "id": "oopm-notes-eduno-5",
        "title": "Unit 5 - OOPM",
        "contributor": "Eduno Team",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1ilzVJpdOCY64ONGBkpRDJOQLqRLhpqD2/view?usp=drive_link"
      },
      {
        "id": "oopm-notes-eduno-6",
        "title": "Full Notes with Codes - OOPM",
        "contributor": "Eduno Team",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1py9fU3VACaW2ad_Xz6zpbaxVSp82FreX/view?usp=drive_link"
      }
    ]
     },
    pyq: { yearWise: [
      {
        "id": "oopm-pyq-2023-1",
        "title": "OOPM PYQ Dec 23",
        "year": "Dec 23",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/11fCRsoGgg7SWD1WHdK9yiXDp-qY6ifr3/view?usp=drive_link"
      },
      {
        "id": "oopm-pyq-2022-1",
        "title": "OOPM PYQ June 24",
        "year": "June 24",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1czs8vMbSds2QpUGa8F3ACCezz-yqRwfO/view?usp=drive_link"
      },
      {
        "id": "oopm-pyq-2020-1",
        "title": "OOPM PYQ June 20",
        "year": "June 20",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1gBYPYwDT6vnhUvBV_3W-j12n7AWNPxR_/view?usp=drive_link"
      },
      {
        "id": "oopm-pyq-2019-1",
        "title": "OOPM PYQ Dec 20",
        "year": "Dec 20",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1UmuoZD3xtcGRxkzfJbz1cYbhtpG3HaW1/view?usp=drive_link"
      }
    ],
    unitWise: [
      {
        "id": "oopm-pyq-unit-1",
        "title": "OOPM Unit 1 PYQ - Eduno",
        "unit": 1,
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1GwA-1ZVtv407IAEjyvMy4RgLCHEX7H7d/view?usp=drive_link"
      },
      {
        "id": "oopm-pyq-unit-2",
        "title": "OOPM Unit 2 PYQ - Eduno",
        "unit": 2,
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1cO8Go7DF3X1FS2fSppOigl0T_R2wfxSG/view?usp=drive_link"
      },
      {
        "id": "oopm-pyq-unit-3",
        "title": "OOPM Unit 3 PYQ - Eduno",
        "unit": 3,
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/110-jnywdTJCm66Ce5PrhcOul2Oqd78us/view?usp=drive_link"
      },
      {
        "id": "oopm-pyq-unit-4",
        "title": "OOPM Unit 4 PYQ - Eduno",
        "unit": 4,
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1aIuz7Ix87Y91S3TjXx2exsmg4XNR382c/view?usp=drive_link"
      },
      {
        "id": "oopm-pyq-unit-5",
        "title": "OOPM Unit 5 PYQ - Eduno",
        "unit": 5,
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/18aIvjG3sbEwb4QD8i9juyOvhKS30IneQ/view?usp=drive_link"
      }
    ]
     },
    content: [
      {
        "id": "m2-content-1",
        "title": "5 Minutes Engineering (one shot)",
        "type": "Video Content",
        "uploadedBy": "5 Minutes Engineering",
        "uploadedOn": "2024-01-23",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtu.be/eWHzz-WHQh4?si=R3nVzK9ebKJS-Nhs"
      },
      {
        "id": "m2-content-2",
        "title": "Apna College (one shot)",
        "type": "Video Content",
        "uploadedBy": "Apna College",
        "uploadedOn": "2024-01-23",
        "subjectCode": "IT 304",
        "subjectName": "Object-Oriented Programming Methodology",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtu.be/mlIUKyZIUUU?si=S9ht-M_a2c4OovZw"
      }
    ],
    important: []
  },
  "dcs": {
    notes: { rgpv: [
      {
        "id": "dcs-notes-rgpv-1",
        "title": "Unit 1 - DCS Notes",
        "contributor": "RGPV Notes",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1eEaizM8crw61qCjs4uyAXYHPbdUNuxB1/view?usp=drive_link"
      },
      {
        "id": "dcs-notes-rgpv-2",
        "title": "Unit 2 - DCS Notes",
        "contributor": "RGPV Notes",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1U5ibk11jYkuEJAu0zTtYWtR1_fSseni4/view?usp=drive_link"
      },
      {
        "id": "dcs-notes-rgpv-3",
        "title": "Unit 3 - DCS Notes",
        "contributor": "RGPV Notes",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1ZILHs3mddtCsE02K1_ci2jUm-YhH1OIv/view?usp=drive_link"
      },
      {
        "id": "dcs-notes-rgpv-4",
        "title": "Unit 4 - DCS Notes",
        "contributor": "RGPV Notes",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1c-pzFA9OjAxz5ZnK2pibGHvCpeTA4my7/view?usp=drive_link"
      },
      {
        "id": "dcs-notes-rgpv-5",
        "title": "Unit 5 - DCS Notes",
        "contributor": "RGPV Notes",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/18DA-8nbkLDcyVBk_pIndS_XWuxaWFINl/view?usp=drive_link"
      }
    ], college: [
      {
        "id": "dcs-notes-eduno-1",
        "title": "Unit 1 - DCS Notes",
        "contributor": "Eduno Team",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1ZL6EmhaIY8lbPYqZgtxQQFeX5q86Tvct/view?usp=drive_link"
      },
      {
        "id": "dcs-notes-eduno-2",
        "title": "Unit 2 - DCS Notes",
        "contributor": "Eduno Team",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1URebCb2DNlkaOKtLSMnHSm_TlJk1LV8v/view?usp=drive_link"
      },
      {
        "id": "dcs-notes-eduno-3",
        "title": "Unit 3 - DCS Notes",
        "contributor": "Eduno Team",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1GLi6u5iQHHX3RuY5BS7X7LZsHz1mT7c5/view?usp=drive_link"
      },
      {
        "id": "dcs-notes-eduno-4",
        "title": "Unit 4 - DCS Notes",
        "contributor": "Eduno Team",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1R7Q2lWef8-4sXuNfarzF28Xb1guNeep9/view?usp=drive_link"
      },
      {
        "id": "dcs-notes-eduno-5",
        "title": "Unit 5 - DCS Notes",
        "contributor": "Eduno Team",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1tvndbTECgXu3LAJojoNkpWChS8uUH2RS/view?usp=drive_link"
      }
    ]
     },
    pyq: { yearWise: [
      {
        "id": "dcs-pyq-2024-june",
        "title": "DCS PYQ June 24",
        "year": "June 24",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1ljOkh6Rqg0_Ki7RQtWfLC-eogR-dRU-v/view?usp=drive_link"
      },
      {
        "id": "dcs-pyq-2020-june",
        "title": "DCS PYQ June 20",
        "year": "June 20",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1GanoVbAddg4-TkV0LAnmHjnYbkCCR04C/view?usp=drive_link"
      },
      {
        "id": "dcs-pyq-2023-december",
        "title": "DCS PYQ Dec 23",
        "year": "Dec 23",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1fXXfHhLhehu7u56w1Qy_8SwdQvnyfPQz/view?usp=drive_link"
      },
      {
        "id": "dcs-pyq-2020-december",
        "title": "DCS PYQ Dec 20",
        "year": "Dec 20",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1x-hYKd0d3yfH4DVxGgQ8TpGdwlZQLSHk/view?usp=drive_link"
      }
    ], unitWise: [
      {
        "id": "dcs-pyq-unit-1",
        "title": "DCS Unit 1 PYQ - Eduno",
        "unit": 1,
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1eEaizM8crw61qCjs4uyAXYHPbdUNuxB1/view?usp=drive_link"
      },
      {
        "id": "dcs-pyq-unit-2",
        "title": "DCS Unit 2 PYQ - Eduno",
        "unit": 2,
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1U5ibk11jYkuEJAu0zTtYWtR1_fSseni4/view?usp=drive_link"
      },
      {
        "id": "dcs-pyq-unit-3",
        "title": "DCS Unit 3 PYQ - Eduno",
        "unit": 3,
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1ZILHs3mddtCsE02K1_ci2jUm-YhH1OIv/view?usp=drive_link"
      },
      {
        "id": "dcs-pyq-unit-4",
        "title": "DCS Unit 4 PYQ - Eduno",
        "unit": 4,
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/1c-pzFA9OjAxz5ZnK2pibGHvCpeTA4my7/view?usp=drive_link"
      },
      {
        "id": "dcs-pyq-unit-5",
        "title": "DCS Unit 5 PYQ - Eduno",
        "unit": 5,
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "PDF",
        "pdfUrl": "https://drive.google.com/file/d/18DA-8nbkLDcyVBk_pIndS_XWuxaWFINl/view?usp=drive_link"
      }
    ]
     },
    content: [
      {
        "id": "dcs-content-knowledge-campus",
        "title": "Knowledge Campus Playlist",
        "type": "Video Content",
        "uploadedBy": "Knowledge Campus",
        "uploadedOn": "2024-03-20",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtube.com/playlist?list=PL5H7yfUmc71mCfqVcmsoWYYU4-7Uc0nUy&si=9j8dew4_ExhXRTuy"
      },
      {
        "id": "dcs-content-engineering-funda",
        "title": "Engineering Funda Playlist",
        "type": "Video Content",
        "uploadedBy": "Engineering Funda",
        "uploadedOn": "2024-03-20",
        "subjectCode": "IT 305",
        "subjectName": "Data Communication Systems",
        "department": "Information Technology",
        "semester": 3,
        "fileType": "Video",
        "videoUrl": "https://youtube.com/playlist?list=PLgwJf8NK-2e4zRyPzO6HI9sUOR8v-80RT&si=pUb98npFiA2CWIdI"
      }
    ],
    important: []
  }
};