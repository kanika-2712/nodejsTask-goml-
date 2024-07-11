let articles = [];

document.addEventListener('DOMContentLoaded', fetchNews);

function fetchNews() {
    const newsTableBody = document.getElementById('newsTableBody');
    newsTableBody.innerHTML = '';
    articles.forEach(article => {
        appendArticleToTable(article);
    });
}

function appendArticleToTable(article) {
    const newsTableBody = document.getElementById('newsTableBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${article.image}" alt="News Image" width="100"></td>
        <td>${article.title}</td>
        <td>${article.content}</td>
        <td>
            <button style="background-color:#b3cdd6" class="btn adbtn action-btn" onclick="editArticle('${article.id}')">Edit</button>
            <button  style="background-color:#b3cdd6"class="btn adbtn action-btn" onclick="deleteArticle('${article.id}')">Delete</button>
        </td>
    `;
    newsTableBody.appendChild(row);
}

function saveArticle() {
    const articleData = {
        id: Date.now().toString(), // Unique ID
        image: document.getElementById('image').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    };

    articles.push(articleData);
    closeForm();
    appendArticleToTable(articleData);
}

function editArticle(id) {
    const article = articles.find(article => article.id === id);
    if (article) {
        document.getElementById('image').value = article.image;
        document.getElementById('title').value = article.title;
        document.getElementById('content').value = article.content;
        document.getElementById('saveButton').onclick = () => updateArticle(id);
        openForm();
    }
}

function updateArticle(id) {
    const articleData = {
        id: id,
        image: document.getElementById('image').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    };

    const index = articles.findIndex(article => article.id === id);
    if (index !== -1) {
        articles[index] = articleData;
        closeForm();
        fetchNews();
    }
}

function deleteArticle(id) {
    articles = articles.filter(article => article.id !== id);
    fetchNews();
}

function openForm() {
    document.getElementById('articleFormModal').style.display = 'block';
}

function closeForm() {
    document.getElementById('articleFormModal').style.display = 'none';
    document.getElementById('articleForm').reset();
    document.getElementById('saveButton').onclick = saveArticle;
}
