import React from "react";
import "./App.scss";

const App = () => {
  return (
    <>
      <main className="main">
        <div className="image">
          <img src="/images/image-omelette.jpeg" alt="omelette" />
        </div>
        <section className="recipe">
          <h1 className="young-serif-regular main-heading">
            Simple Omelette Recipe
          </h1>
          <p className="paragraph outfit-regular">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <section className="preparation">
            {" "}
            <h3 className="outfit-semibold h3">Preparation time</h3>
            <ul>
              <li className="outfit-regular">
                <span className="outfit-bold">Total:</span> Approximately 10
                minutes
              </li>
              <li className="outfit-regular">
                <span className="outfit-bold">Preparation:</span> 5 minutes
              </li>
              <li className="outfit-regular">
                <span className="outfit-bold">Cooking:</span> 5 minutes
              </li>
            </ul>
          </section>
          <section className="ingredients-section">
            <h2 className="young-serif-regular">Ingredients</h2>
            <ul role="list">
              <li className="outfit-regular">2-3 large eggs</li>
              <li className="outfit-regular">Salt, to taste</li>
              <li className="outfit-regular">Pepper, to taste</li>
              <li className="outfit-regular">1 tablespoon of butter or oil</li>
              <li className="outfit-regular">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>
          <section className="instruction">
            <h2 className="young-serif-regular">Instructions</h2>
            <ol>
              <li className="outfit-regular paragraph">
                <span className="outfit-bold color">Beat the eggs: </span>In a
                bowl, beat the eggs with a pinch of salt and pepper until they
                are well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li className="outfit-regular paragraph">
                <span className="outfit-bold color">Heat the pan: </span>Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="outfit-regular paragraph">
                <span className="outfit-bold color">Cook the omelette: </span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="outfit-regular paragraph">
                <span className="outfit-bold color">
                  Add fillings (optional):
                </span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li className="outfit-regular paragraph">
                <span className="outfit-bold color">Fold and serve: </span>As
                the omelette continues to cook, carefully lift one edge and fold
                it over the fillings. Let it cook for another minute, then slide
                it onto a plate.
              </li>
              <li className="outfit-regular paragraph">
                <span className="outfit-bold color">Enjoy: </span>Serve hot,
                with additional salt and pepper if needed.
              </li>
            </ol>
          </section>
          <section className="nutrition">
            <h2 className="young-serif-regular">Nutrition</h2>
            <p className="paragraph outfit-regular">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <ul className="details">
              <li className="border-list outfit-regular">Calories</li>
              <li className="border-list outfit-bold dark-Raspberry">
                277kcal
              </li>
              <li className="border-list outfit-regular">Carbs</li>
              <li className="border-list outfit-bold dark-Raspberry">0g</li>
              <li className="border-list outfit-regular">Protien</li>
              <li className="border-list outfit-bold dark-Raspberry">20g</li>
              <li className="border-list outfit-regular">Fat</li>
              <li className="border-list outfit-bold dark-Raspberry">22g</li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
