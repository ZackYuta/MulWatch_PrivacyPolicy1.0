document.addEventListener("DOMContentLoaded", function() {
    const languageSelect = document.getElementById('language-select');
    const chapterTitles = document.querySelectorAll('.chapter h2');
    const privacyPolicy = document.querySelectorAll('h1');
    const languageContents = document.querySelectorAll('.language-content');
    const languageLabel = document.querySelector('label[for="language-select"]');

    // 言語が選択されたときの処理
    languageSelect.addEventListener('change', () => {
        const selectedLanguage = languageSelect.value;

        // すべての言語コンテンツとPrivacyPolicyを非表示にする
        languageContents.forEach(content => {
            content.style.display = 'none';
        });
        privacyPolicy.forEach(title => {
            title.style.display = 'none';
        });

        // 選択した言語に対応するコンテンツを表示する
        languageContents.forEach(content => {
            if (content.classList.contains(selectedLanguage)) {
                content.style.display = 'block';
            }
        });

        // 選択した言語に対応する章タイトルとPrivacyPolicyを表示する
        chapterTitles.forEach(title => {
            title.style.display = 'none';
            if (title.classList.contains(selectedLanguage)) {
                title.style.display = 'block';
            }
        });
        privacyPolicy.forEach(title => {
            if (title.classList.contains(selectedLanguage)) {
                title.style.display = 'block';
            }
        });
        // Language ラベルを更新する
        if (selectedLanguage === 'en') {
            languageLabel.textContent = 'Language: ';
        } else if (selectedLanguage === 'ja') {
            languageLabel.textContent = '言語: ';
        } else if (selectedLanguage === 'fr') {
            languageLabel.textContent = 'Langue: ';
        } else if (selectedLanguage === 'de') {
            languageLabel.textContent = 'Sprache: ';
        } else if (selectedLanguage === 'es') {
            languageLabel.textContent = 'Idioma: ';
        } else if (selectedLanguage === 'pt') {
            languageLabel.textContent = 'Idioma: ';
        } else if (selectedLanguage === 'zh') {
            languageLabel.textContent = '语言: ';
        } else if (selectedLanguage === 'ar') {
            languageLabel.textContent = 'اللغة: ';
        }
    });
});