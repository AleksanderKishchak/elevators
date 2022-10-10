console.log('Hello World');

/*const fetch = require('node-fetch');

const releaseDescription = process.env.RELEASE_BODY;
const releaseLink = process.env.RELEASE_LINK;
const jiraUserName = process.env.JIRA_USERNAME;
const jiraToken = process.env.JIRA_API_TOKENS;

const taskRegExp = /https:\/\/pdffiller\.atlassian\.net\/browse\/[A-Z]{2,5}-\d{2,4}/g

const getAuthHeader = () => `Basic ${Buffer.from(`${jiraUserName}:${jiraToken}`).toString('base64')}`
const uniq = (arr) => Array.from(new Set(arr))
const getLastPathPart = (url) => url.split('/').pop()

const getTasksIds = description => {
  const tasksUrls = uniq(description.match(taskRegExp));

  return tasksUrls.map(getLastPathPart)
}*/

/*const toJiraCommentStructure = commentText => ({
  body: {
    version: 1,
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: commentText
          },
        ]
      }
    ]
  }
})*/

/*const addComment = (taskId, comment) => {
  console.log('request url ==', `https://pdffiller.atlassian.net/rest/api/3/issue/${taskId}/comment`)

  return fetch(`https://pdffiller.atlassian.net/rest/api/3/issue/${taskId}/comment`, {
    method: 'post',
    headers: {
      'Authorization': getAuthHeader(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(toJiraCommentStructure(comment))
  })
    .then(response => {
      console.log(
        `Response: ${response.status} ${response.statusText}`
      );

      return response.text();
    })
    .then(res => {
      console.log(`Successfully added comment for ${taskId}`);
      console.log(res)
    })
    .catch(console.error)
}*/


// FLOW START

// Get task ids (ex: CPU-123) from release description
// const taskIds = getTasksIds(releaseDescription);

// hyperlink to release
// const commentText = `[release ${getLastPathPart(releaseLink)}|${releaseLink}]`

// adding comment to specific task
/*taskIds.forEach(id => {
  console.log(`Adding comment for ${id}`);
  addComment(id, commentText)
})*/

// console.log(taskIds)
// console.log(releaseLink)
