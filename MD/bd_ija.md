# 🎲 Impacto Jovem Afro (IJA) - 1ª Entrega: Implementação do Banco de Dados

## Objetivo do Banco de Dados

BD-IJA será usado para armazenar informações essenciais sobre cadastros, o que pode envolver registros de usuários em geral, cursos ou qualquer outro tipo de dado relevante para o sistema.

## Seque a baixo o Script SQL

### 📈 MODELO - FÍSICO

```sql
-- Tabela Usuario

CREATE TABLE Usuario(
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(25) NOT NULL,
    tipo ENUM('Aluno', 'Instrutor', 'Administrador') DEFAULT 'Aluno',
    data_cadastro DATE NOT NULL
);

-- Tabela Curso

CREATE TABLE Curso(
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    nome_instrutor VARCHAR(100) NOT NULL,   
    data_criacao DATE NOT NULL
);

-- Tabela Aula
CREATE TABLE Aula(
    id_aula INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    video_url VARCHAR(255) NOT NULL,
    id_curso INT NOT NULL,   
    CONSTRAINT FK_Aula_Curso FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
);

-- Tabela Inscricao: Relaciona Usuario ↔ Curso

CREATE TABLE Inscricao(
    id_inscricao INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    data_inscricao DATE NOT NULL,    
    CONSTRAINT fk_inscricao_usuario FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_inscricao_curso FOREIGN KEY (id_curso) REFERENCES Curso(id_curso) ON DELETE CASCADE ON UPDATE CASCADE,
    UNIQUE (id_usuario, id_curso) 
);

-- Tabela Certificado: Relaciona Usuario ↔ Curso 

CREATE TABLE Certificado(
    id_certificado INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    data_emissao DATE NOT NULL,
    codigo_verificacao VARCHAR(200) UNIQUE NOT NULL,
    CONSTRAINT fk_certificado_usuario FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_certificado_curso FOREIGN KEY (id_curso) REFERENCES Curso(id_curso) ON DELETE CASCADE ON UPDATE CASCADE,
    UNIQUE (id_usuario, id_curso) 
);
```
### 📈 MODELO - LÓGICO<hr>

![lógico](/IMG/BD_IJA/Model-Lógico_IJA.png)

### 📈 MODELO - CONCEITUAL<hr>

![conceitual](/IMG/BD_IJA/DER-Conceitual_IJA.png)

# Próximos Passos

- Implementar API para conexão com o banco de dados

 - Testar e validar a inserção e recuperação de informações

