// Show Current Git Branch and Commit Hash
const getGitInfo = () => {
  try {
    const execSync = require('child_process').execSync
    const gitBranch = execSync('git rev-parse --abbrev-ref HEAD')?.toString()?.trim() ?? ''
    const gitCommitHash = execSync('git rev-parse HEAD')?.toString()?.trim() ?? ''
    const buildId = `${gitBranch}_${gitCommitHash.substring(0, 7)}`

    return { gitBranch, gitCommitHash, buildId }
  } catch (error) {
    console.log('get git info failed.')

    return undefined
  }
}

module.exports = () => {
  const gitInfo = getGitInfo()

  return {
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
    eslint: {
      ignoreDuringBuilds: true
    },
    images: {
      unoptimized: true
    },
    env: {
      ...gitInfo
    }
  }
}
