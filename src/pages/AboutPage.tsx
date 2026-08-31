export default function AboutPage() {
  return (
    <main className="subpage">
      <div className="page-header">
        <h1>About</h1>
      </div>
      <div className="container page-content about-layout">
        <figure className="about-photo">
          <img src="./images/about-host.jpg" alt="Ilona Limonta-Volkova" />
        </figure>
        <p className="about-name">Ilona Limonta-Volkova</p>
        <p className="page-lead about-intro">
          I am the daughter of Cuban and Russian immigrants, raised with a global perspective and a
          deep appreciation for the value of opportunity. After earning my degree from an Ivy League
          university, I built my career on Wall Street and in Silicon Valley, navigating the worlds
          of finance and innovation at the highest levels.
        </p>
        <p className="about-full">
          Today, I am on a mission to make money less taboo. Through my work as a venture capital
          investor, writer, and podcast host, I am passionate about bridging the gap between the
          complex language of finance and everyday life. I believe everyone deserves access to the
          tools and knowledge that shape financial futures, and I am here to help translate them
          into real, relatable conversations.
        </p>
        <p className="about-full">
          Money touches every part of our lives. It is time we talk about it openly, honestly, and
          in a way that empowers everyone.
        </p>
      </div>
    </main>
  );
}
