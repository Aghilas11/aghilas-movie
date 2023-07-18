import Title from "../components/Title";
import Navigation from "../components/Navigation";

const LikePage = () => {
  return (
    <div className="user-list-page">
      <Title />
      <Navigation />
      <h2>
        Coups de coeur <span>❤️</span>
        <div className="result"></div>
      </h2>
    </div>
  );
};

export default LikePage;
