document.addEventListener('DOMContentLoaded', () => {
    // パーティクルシステムの初期化
    new ParticleSystem();
    
    // スキルバーのアニメーション
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    const value = bar.getAttribute('data-value');
                    bar.style.width = `${value}%`;
                });
            }
        });
    });

    document.querySelectorAll('.skill-container').forEach(container => {
        observer.observe(container);
    });
    
    // ダークモードの設定を更新
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        // クリック時のアニメーション
        themeToggle.style.animation = 'rotate 0.5s ease-in-out';
        
        // テーマの切り替え
        document.body.dataset.theme = 
            document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', document.body.dataset.theme);
        
        // アニメーション終了後にリセット
        setTimeout(() => {
            themeToggle.style.animation = '';
        }, 500);
    });

    // 初期テーマの設定
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.dataset.theme = savedTheme;
    } else if (prefersDarkScheme.matches) {
        document.body.dataset.theme = 'dark';
    }

    // システムのテーマ変更を検知
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.body.dataset.theme = e.matches ? 'dark' : 'light';
        }
    });
});

const translations = {
    ja: {
        about: 'について',
        skills: 'スキル',
        // ... 他の翻訳
    },
    en: {
        about: 'About',
        skills: 'Skills',
        // ... 他の翻訳
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
}