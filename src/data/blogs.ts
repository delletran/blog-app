// https://developers.google.com/blogger/docs/3.0/using

import { v4 as uuidv4 } from 'uuid';

const blogs = [
  {
    "id": `${uuidv4()}`,
    "title": "Being handsome",
    "category": "TEST_CATERGORY",
    "description": "How to be a president",
    "published": true,
    "tags": ["President", "Rodel", "Letran", "delletran"]
  },
  {
    "id": `${uuidv4()}`,
    "title": "Always Handsome",
    "category": "TEST_CATERGORY",
    "description": "How to be a Handsome",
    "published": true,
    "tags": ["Handsome", "Rodel", "Letran", "delletran"]
  },
]


export default blogs
