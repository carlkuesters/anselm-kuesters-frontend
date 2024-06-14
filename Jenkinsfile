pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        skipDefaultCheckout()
        ansiColor('xterm')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'cypress/browsers:node-18.20.3-chrome-125.0.6422.141-1-ff-126.0.1-edge-125.0.2535.85-1'
                    reuseNode true
                }
            }
            steps {
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run test -- --browsers=ChromeHeadlessInDocker'
                sh 'npm run e2e'
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
