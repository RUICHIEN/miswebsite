// 使用 Next.js (可直接部署 Vercel)
// 步驟：
// 1. npx create-next-app@latest my-site
// 2. 把以下檔案內容替換
// 3. push 到 GitHub
// 4. Vercel 匯入 repo 直接部署

// ---------------------------
// app/layout.js
// ---------------------------
export const metadata = {
  title: '千的網站',
  description: '個人作業網站'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body style={{ fontFamily: 'sans-serif', margin: 0 }}>
        <nav style={{ padding: 20, borderBottom: '1px solid #ddd' }}>
          <a href="/" style={{ marginRight: 20 }}>關於我</a>
          <a href="/plan">工作規劃</a>
        </nav>
        <div style={{ padding: 20 }}>
          {children}
        </div>
      </body>
    </html>
  )
}

// ---------------------------
// app/page.js (首頁)
// ---------------------------
export default function Home() {
  return (
    <div>
      <h1>關於我</h1>

      <p>
        我目前就讀於靜宜大學資訊管理學系，過去曾接觸社群行銷與圖文設計相關工作。
        在實務經驗中逐漸發現，設計若能結合網站與數位產品邏輯，會更完整。
      </p>

      <p>
        我擅長版面設計與視覺呈現，也正在學習網站製作與前端基礎，
        希望未來能朝向結合設計與網站實作的方向發展。
      </p>
    </div>
  )
}

// ---------------------------
// app/plan/page.js (第二頁)
// ---------------------------
export default function Plan() {
  return (
    <div>
      <h1>工作規劃</h1>

      <h2>1. 工作介紹</h2>
      <p><strong>公司：</strong>Tenten.co</p>
      <p><strong>職務：</strong>內部設計師</p>
      <p>
        工作內容包含網站體驗設計、使用 Webflow 進行前端製作，
        並將設計轉換為實際可運作的網站。
      </p>

      <h3>工作需求</h3>
      <ul>
        <li>具備設計能力</li>
        <li>了解網站架構</li>
        <li>會或願意學習 Webflow</li>
        <li>具備團隊合作能力</li>
      </ul>

      <h2>2. 自傳</h2>
      <p>
        我目前就讀於靜宜大學資訊管理學系，曾從事社群設計相關工作，
        在實務中培養視覺設計與使用者思維。
      </p>

      <p>
        近期開始接觸網站製作，並學習將設計轉為實際介面，
        對於設計與技術的結合產生高度興趣。
      </p>

      <p>
        我具備設計能力，同時持續補強前端技術，
        希望未來能成為能從設計到實作完整參與的角色。
      </p>

      <h2>3. 未來規劃</h2>

      <h3>短期</h3>
      <ul>
        <li>學習 HTML / CSS / JavaScript</li>
        <li>練習 Webflow 製作網站</li>
        <li>建立作品集</li>
      </ul>

      <h3>長期</h3>
      <ul>
        <li>成為結合設計與前端的數位人才</li>
        <li>能獨立完成網站與產品設計</li>
      </ul>
    </div>
  )
}
