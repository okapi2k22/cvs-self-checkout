import './App.scss';
import malcolmSketch from './images/IMG-1274.jpg';
import alysiaSketch from './images/IMG-1275.jpg';

import storyboardFrame1 from './images/storyboard-frame-1.png';
import storyboardFrame2 from './images/storyboard-frame-2.png';
import storyboardFrame3 from './images/storyboard-frame-3.png';
import storyboardFrame4 from './images/storyboard-frame-4.png';
import storyboardFrame5 from './images/storyboard-frame-5.png';
import storyboardFrame6 from './images/storyboard-frame-6.png';

import { Screenshot, Description, Splitshow, Header } from './components';

const App = () => {
  return (
    <main className="App">
      <article>
        <Header
          title="CVS Self-Checkout"
          subtitle="Human-Centered Personas and Storyboards" 
        />
        <div className="case-study-content">
          <Screenshot 
            img={storyboardFrame6}
            alt="Sketch of a CVS self-checkout error"
            description="The final deliverable - An authentic narrative of the CVS customer experience"
            isCreditable={false}
          />

          <Description 
            header="The Background"
          >
            <p>CVS is a national brick-and-mortar pharmacy chain.</p>
            <p>CVS provides a digital self-checkout service as part of their customer experience.</p>
            <p>With self-checkout, customers can self-serve by scanning and paying for over-the-counter items themselves.</p>
          </Description>
          <Screenshot
            img="https://d3thpuk46eyjbu.cloudfront.net/uploads/production/14527/1619457533/original/cvs-header.jpeg"
            alt="CVS self-checkout interface"
            description="An example of how the CVS self-checkout system looks on the ground"
            source="McSweeney's"
            isCreditable={true}
          />

          <Description 
            header="The Challenge"
          >
            <p>Retail merchants like CVS love self-checkouts; however, <a href="https://www.cnn.com/2022/07/09/business/self-checkout-retail/index.html">they are notorious for their bad user experience</a>.</p> 
            <p>To improve the CVS self-checkout, we were entrusted with better understanding customer pain points.</p> 
            <br />
            <p>We followed a human-centered research approach by observing and interviewing customers interacting with the self-checkout interface.</p> 
            <p>Using data-driven insights, we developed bespoke user-personas.</p>
            <p>As a result, we produced an authentic narrative that visualized the pain customers feel while using the CVS self-checkout.</p>
          </Description>

          <Description 
            header="The Observations"
          >
            <p>The first step in our research process was to simply observe customers interacting with the CVS self-checkout.</p> 
            
            <p>Contextually observing customers was useful for two reasons:</p>
            <ul>
              <li>it allowed us to gain insight into the end-user behavior without bias</li>
              <li>it gave us context to design better interview questions</li>
            </ul>
            <br />
            <p>As we were observing customers, we noticed certain trends.</p>
            <p>For instance, we noticed that for customers that brought their own bags, many would tap the option to use their own bag and receive a discount. When they selected the option, there was no visual feedback that would appear on the screen confirming their selection. There was also a long delay before they could interact with the screen again. We noticed that many users would frown.</p>
            <p>In another instance, after tapping the “Finish and Pay” button, there were three intermediate screens before accepting payment. We observed many users would hunch closer to the screen and tap the touch screen at a faster rate.</p>
            <p>Lastly, when trying to scan an item, the interface would give audio feedback that an attendant would come. The user would physically take a step back, look up away from the screen, and scan around the store.</p>
          </Description>

          <Description header="The Interviews">
            <p>The next step in our research process was to interview customers about the CVS self-checkout.</p>
            <p>Overall, we inquired customers about the learnability, memorability, and efficiency of the system.</p>
            <br />
            <p>Here is a sample of the questions that we asked:</p>
            <ol>
              <li>What is your main motivation when using the self-checkout?</li>
              <li>Can you recall how the self-checkout screen looks like? Can you draw a sketch for me?</li>
              <li>What is your first reaction when you see the self-checkout interface?</li>
              <li>Would you say that the CVS self-checkout is easy to learn? (Strongly Disagree-Disagree-Neutral-Agree-Strongly Agree)</li>
              <li>Would you say that the CVS self-checkout is efficient? (Strongly Disagree-Disagree-Neutral-Agree-Strongly Agree)</li>
              <li>What obstacles do you face when using the interface? Tell me a story about it?</li>
            </ol>
            <br />
            <p>We used many notable interview techniques to gain insights.</p>
            <p>For instance, we used a 5-point Likert Scale to gauge the intensity of the subject's opinion.</p>
            <p>In addition, we used sketching to test the memorability of the interface.</p>
            <p>We also asked open-ended questions so that subjects had the freedom to voice their concerns.</p>
            <br />
            <p>From our interview strategy, we gained many informative insights.</p>
            <p></p>
          </Description>
          <Splitshow>
            <Splitshow.Slot name="left">
              <Screenshot 
                img={malcolmSketch}
                alt="Malcolm's rough sketch of the CVS self-checkout"
                description="Most subjects had an excellent recall. They could identify the general layout of the interface and even the colors of the buttons."
                isCreditable={false}
              />
            </Splitshow.Slot>
            <Splitshow.Slot name="right">
              <Screenshot 
                img={alysiaSketch}
                alt="Alysia's rough sketch of the CVS self-checkout"
                description="Interestingly, many subjects would mix up the user flow. For instance, this customer was trying to draw the first screen of the user flow but mixed it up with the final payment screen."
                isCreditable={false}
              />
            </Splitshow.Slot>
          </Splitshow>

          <Description header="The Personas">
            <p>From the data collected from our interviews, we developed two unique personas:</p>
            <ul>
              <li>Self-Conscious Sam</li>
              <li>Environmentally-Conscious Eddie</li>
            </ul>
          </Description>
          <Description header="Self-Conscious Sam">
            <p>Super Shy Sam is a grad student that lives off-campus. He buys personal items at CVS so he really wants to be discrete and not talk with the cashier.</p>
            <br />
            <h4>Thinks</h4>
            <ul>
              <li>“Thank god there's self-checkout. I really don't want to talk to the cashier”</li>
              <li>“Why do I have to wait for the lady to finish in order to press a button?”</li>
              <li>“Can there be less popups. I just want to pay. I don't want to hold up the line and be a nuisance for everyone else”</li>
              <li>“Oh god there's an error. Now everyone is looking at me!”</li>
            </ul>
            <br />
            <h4>Feels</h4>
            <ul>
              <li>Relieved to see a self-checkout</li>
              <li>Rushes to get out as soon as possible </li>
              <li>Embarrassed when an error occurs</li>
            </ul>
            <br />
            <h4>Says</h4>
            <ul>
              <li>"I'm so sorry everyone"</li>
              <li>"I hope no one notices that I'm buying ointment"</li>
            </ul>
            <br />
            <h4>Does</h4>
            <ul>
              <li>Taps quickly when there is a popup</li>
              <li>Scans items really fast</li>
              <li>Facepalms when there is an error</li>
            </ul>
          </Description>
          <Description header="Environmentally-Conscious Eddie">
            <p>Environmentally-Conscious Eddie is an undergraduate student that lives on campus. He tries to eliminate waste by planning out his purchases and brings his own bag with him.</p>
            <br />
            <h4>Thinks</h4>
            <ul>
              <li>“Thank god there's self-checkout. I really don't want to talk to the cashier”</li>
              <li>“Why is the screne freezing?”</li>
              <li>“Can there be less popups. I just want to pay. This is a waste of energy”</li>
            </ul>
            <br />
            <h4>Feels</h4>
            <ul>
              <li>Relieved to see a self-checkout</li>
              <li>Rushes to get out as soon as possible</li>
              <li>Confused when there is a button delay</li>
            </ul>
            <br />
            <h4>Says</h4>
            <ul>
              <li>"I was trying to use my own bag but the screen froze"</li>
              <li>"I know what I'm doing"</li>
            </ul>
            <br />
            <h4>Does</h4>
            <ul>
              <li>Plans out what he wants to buy</li>
              <li>Taps the "Use Your Own Bag" button</li>
              <li>Frowns when there is a tap delay</li>
            </ul>
          </Description>

          <Description header="The Storyboard">
            <p>From our user personas, we produced a storyboard.</p>
            <p>Storyboards help create an authentic narrative and visualize customer paint points.</p>
            <p>We specifically chose Self-Conscious Sam as our model for the storyboard, as Self-Conscious Sam best represents the experiences of our interview subjects.</p>
          </Description>
          <Screenshot 
            img={storyboardFrame1}
            alt="Sketch of Self-Conscious Sam looking at his shopping list"
            description="Self-Conscious Sam is a man on a mission. He has his shopping list planned out and is ready to shop at CVS!"
            isCreditable={false}
          />
          <Screenshot 
            img={storyboardFrame2}
            alt="Sketch of Self-Conscious Sam navigating through the CVS store"
            description="Since he knows what he needs, Sam flies from aisle to aisle. He is in a special rush because he’s buying ointment today and feels very insecure about it."
            isCreditable={false}
          />
          <Screenshot 
            img={storyboardFrame3}
            alt="Sketch of Self-Conscious Sam oogling the CVS self-checkout"
            description="“Thank god there’s a self-checkout. I really didn’t want to talk with the cashier today!”"
            isCreditable={false}
          />
          <Screenshot 
            img={storyboardFrame4}
            alt="Sketch of Self-Conscious Sam rapidly scanning items"
            description="Elated, Sam starts scanning his items as fast as possible because he doesn’t want to hold back the rest of the line"
            isCreditable={false}
          />
          <Screenshot 
            img={storyboardFrame5}
            alt="Sketch of Self-Conscious Sam repeatedly tapping the self-checkout screen"
            description="Sam just wants to pay, but there are so many pop ups that show up. Frustrated, Sam taps the screen repeatedly!"
            isCreditable={false}
          />
          <Screenshot 
            img={storyboardFrame6}
            alt="Sketch of self-checkout yelling error while Self-Conscious Sam facepalms in reaction"
            description="An error shows up, and the system yells to the entire store that Sam requires assistance. The system might as well have just said Sam was buying ointment to everybody! Sam facepalms in embarrassment."
            isCreditable={false}
          />

        </div>
      </article>
    </main>
  );
}

export default App;
