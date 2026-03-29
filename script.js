:root {
    --main-blue: #1e3a8a;
    --accent-blue: #3b82f6;
    --dark: #1f2937;
    --light: #f3f4f6;
    --white: #ffffff;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: var(--dark);
    background-color: var(--white);
    line-height: 1.6;
}

/* Верхняя полоска */
.top-bar {
    background: var(--main-blue);
    color: white;
    padding: 8px 10%;
    font-size: 0.85rem;
    display: flex;
    justify-content: space-between;
}

/* Навигация */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo { font-size: 1.6rem; font-weight: 800; color: var(--main-blue); }
.logo span { color: var(--accent-blue); }

.menu { display: flex; list-style: none; gap: 30px; }
.menu a { text-decoration: none; color: var(--dark); font-weight: 500; transition: 0.3s; }
.menu a:hover { color: var(--accent-blue); }

/* Баннер */
.main-banner {
    height: 500px;
    background: linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), 
                url('https://images.unsplash.com/photo-1523050335392-9bc56759728b?auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    padding: 0 10%;
    color: white;
}

.banner-text h1 { font-size: 3.5rem; margin-bottom: 20px; max-width: 700px; line-height: 1.1; }
.banner-text p { font-size: 1.2rem; margin-bottom: 30px; max-width: 500px; opacity: 0.9; }

.btn-primary {
    background: var(--accent-blue);
    color: white;
    padding: 15px 35px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    display: inline-block;
    transition: 0.3s;
}

.btn-primary:hover { background: #2563eb; transform: translateY(-2px); }

/* Секции */
.content-section { padding: 80px 10%; }
.section-title { text-align: center; margin-bottom: 50px; font-size: 2.2rem; position: relative; }
.section-title::after { content: ''; display: block; width: 60px; height: 4px; background: var(--accent-blue); margin: 15px auto 0; }

.news-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }

.news-card {
    padding: 30px;
    background: var(--light);
    border-radius: 10px;
    transition: 0.3s;
}

.news-card:hover { background: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.news-date { color: var(--accent-blue); font-weight: bold; font-size: 0.9rem; margin-bottom: 10px; }

/* Инфо-блок */
.info-block { background: var(--light); padding: 80px 10%; }
.info-container { display: flex; align-items: center; gap: 50px; }
.text-side { flex: 1; }
.image-side { flex: 1; }

.image-placeholder {
    height: 350px;
    background: #cbd5e1;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #64748b;
    font-weight: bold;
}

.features-list { list-style: none; margin-top: 20px; }
.features-list li { margin-bottom: 10px; font-weight: 500; }

footer { background: var(--dark); color: white; padding: 40px 10%; text-align: center; }
