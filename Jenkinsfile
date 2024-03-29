@Library ('folio_jenkins_shared_libs') _

pipeline {

  parameters {
    string(name: 'OKAPI_URL',
           defaultValue: 'http://folio-snapshot-stable.aws.indexdata.com:9130',
           description: 'Okapi URL')
  }

  environment {
    tenant = "platform_erm_${env.BRANCH_NAME}_${env.BUILD_NUMBER}"
    npmConfig = 'jenkins-npm-folioci'
  }

  options {
    timeout(30)
    buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '10',
                   daysToKeepStr: '', numToKeepStr: '30'))
  }

  agent {
    node {
      label 'platform-build'
    }
  }

  stages {
    stage('Setup') {
      steps {
        script {
          currentBuild.displayName = "#${env.BUILD_NUMBER}-${env.JOB_BASE_NAME}"
        }
        sendNotifications 'STARTED'
      }
    }

    stage('Build Stripes Platform') {
      steps {
        echo "Okapi URL: ${params.OKAPI_URL}"
        echo "Tenant: ${env.tenant}"

        buildStripesPlatform(params.OKAPI_URL,env.tenant)
      }
    }
  } // end stages

  post {
    always {
      sendNotifications currentBuild.result
    }
  }
}

