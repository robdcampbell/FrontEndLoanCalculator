import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PublicHomePage = () => {
  return (
    <section className="content__wrapper__main">
      <div className="content__mainSection">
        <div className="home__heading">
          <h1> Time to de-mystify some things.</h1>
          <div className="landing__subtitle">
            <p>
              Terms like <span className="emphasis__spanP">"401k"</span>,
              <span className="emphasis__spanP">"IRA"</span>, and other acronyms
              we hear tossed around can all be a bit daunting at first.
            </p>
            <p>
              But these can all be simplified to get closer to building a
              fruitful future.
            </p>
            <p style={{ marginBottom: "0" }}>
              <span className="emphasis__spanP">Ready to get started? :</span>
            </p>
            <Link to="/home-public" className="createAccount__link">
              <p>Create an account, here.</p>
            </Link>
          </div>
          <p className="calc__intro">
            <span className="emphasis__spanP">Seeing is believing. </span>
            Visualize the "magic" behind it here:
          </p>

          <form>
            {/* CALCULATOR */}

            <div className="compound__interest__calc">
              <h3>The miracle of compound interest:</h3>

              <div className="initial__investment calc__input__section">
                <input
                  type="number"
                  placeholder="Amount put in the first time..."
                />
                <label htmlFor="#">Initial Investment</label>
                {/* <p>sub explanation</p> */}
              </div>

              <div className="monthly__contribution calc__input__section">
                <input type="number" placeholder="Amount added each month..." />
                <label htmlFor="">Monthly Contribution</label>
                {/* <p>sub explanation</p> */}
              </div>

              <div className="length__years calc__input__section">
                <input
                  type="number"
                  placeholder="Amount it will be in this number of years..."
                />
                <label htmlFor="">Length of time in years</label>
                {/* <p>sub explanation</p> */}
              </div>

              <div className="estimated__interest__rate calc__input__section">
                <input type="number" placeholder="% return expected..." />
                <label htmlFor="">Estimated Interest Rate</label>
                {/* <p>sub explanation</p> */}
              </div>

              <div className="interest__rate__variance calc__input__section">
                <input
                  type="number"
                  placeholder="% the estimated interest may change per frequency (below)..."
                />
                <label htmlFor="">Interest rate variance range</label>
                {/* <p>sub explanation</p> */}
              </div>

              <div className="compound__frequencey calc__input__section">
                <label htmlFor="">Compound frequency</label>
                <select name="">
                  <option value="annually">Annually</option>
                  <option value="semiannually">Semiannually</option>
                  <option value="monthly">Monthly</option>
                  <option value="daily">Daily</option>
                </select>
                {/* <p>sub explanation</p> */}
              </div>

              <div className="calc__buttons">
                <button className="confirm__btn__fill" type="button">
                  View Results
                </button>
                <button className="confirm__btn__outline" type="button">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PublicHomePage;
