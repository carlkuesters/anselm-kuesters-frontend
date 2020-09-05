node {
    ansiColor('xterm') {
        try {
            stage('Checkout') {
                checkout scm
            }
            stage('Lint') {
                sh 'npm run lint'
            }
            stage('Unit Tests') {
                sh 'npm run test'
            }
            stage('E2E Tests') {
                sh 'npm run e2e'
            }
            stage('Build') {
                sh 'npm run build'
            }
        } finally {
            step([$class: 'GitHubCommitStatusSetter'])
            cleanWs()
        }
    }
}
