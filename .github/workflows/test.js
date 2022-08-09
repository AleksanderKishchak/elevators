const releaseDescription = process.env.RELEASE;

const taskRegExp = /https:\/\/pdffiller\.atlassian\.net\/browse\/CPU-\d{2,4}/g
const uniq = (arr) => Array.from(new Set(arr))
const getTaskIdFromUrl = (url) => url.split('/').pop()

const getTasksIds = description => {
  const tasksUrls = uniq(description.match(taskRegExp));

  return tasksUrls.map(getTaskIdFromUrl)
}

const taskIds = getTasksIds(releaseDescription);

console.log(taskIds)
