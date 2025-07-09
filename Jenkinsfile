pipeline {
    agent any

    environment {
        DB_HOST = 'localhost'
        DB_PORT = '3307'
        DB_NAME = 'gestion_seguros'
        DB_USER = 'safebryan'
        DB_PASS = '081012'
    }

    stages {

        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/Juanlpa/gestionjenkis.git'
            }
        }

        stage('Levantar MySQL con Docker Compose') {
            steps {
                sh 'docker-compose up -d'
                // Espera a que MySQL esté listo
                sh 'sleep 15'
            }
        }

        stage('Compilar backend') {
            steps {
                sh 'mvn clean compile'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Generar reporte JaCoCo y Allure') {
            steps {
                sh 'mvn verify'
            }
        }

        stage('Construir imagen Docker') {
            steps {
                sh 'mvn package -DskipTests'
                sh 'docker build -t gestion-seguros-backend .'
            }
        }

    }

    post {
        always {
            junit '**/target/surefire-reports/*.xml'
            allure includeProperties: false, jdk: '', results: [[path: 'target/allure-results']]
            sh 'docker-compose down'
        }
    }
}
