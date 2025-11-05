// Initialize jsPsych

  

// Define welcome/instructions page
const welcome_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <h2>Welcome to the Research Study</h2>
    <p>This study is about <b>online decision-making and choice theory</b>. 
    You will be asked to make a series of simple choices between options.</p>
    <p>Please read the instructions carefully before proceeding.</p>

    <div class="consent-box">
      <input type="checkbox" id="consent-check"> 
      <label for="consent-check"> I have read and understood the instructions and consent to participate.</label>
    </div>
  `,
  choices: ['Next'],
  on_load: function() {
    // Disable button until checkbox is checked
    const btn = document.querySelector('.jspsych-btn');
    btn.disabled = true;

    document.getElementById('consent-check').addEventListener('change', function() {
      btn.disabled = !this.checked;
    });
  }
};


 // ✅ Page 2: Demographics Form
    const demographics = {
      type: jsPsychSurveyHtmlForm,
      preamble: "<h2>Participant Information</h2><p>Please fill out the following details:</p>",
      html: `
        <div class="form-field">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div><br>
        <div class="form-field">
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" min="18" max="99" required>
        </div><br>
        <div class="form-field">
          <label for="gender">Gender:</label>
          <select id="gender" name="gender" required>
            <option value="">-- Select --</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div><br>
        <div class="form-field">
          <label for="education">Education Level:</label>
          <select id="education" name="education" required>
            <option value="">-- Select --</option>
            <option value="High school">High school</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </div>
      `,
      button_label: 'Continue',
      data: { task: 'demographics' }
    };

  // ✅ Page 3: Preference Ratings (7-point Likert)
    const preference_rating = {
      type: jsPsychSurveyLikert,
      preamble: "<h2>Headphone Preferences</h2><p>Please rate how important each feature is to you when choosing headphones.</p>",
      questions: [
        {
          prompt: "Price",
          labels: ["1<br>(Not important)", "2", "3", "4", "5", "6", "7<br>(Extremely important)"],
          required: true
        },
        {
          prompt: "Sound Quality",
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          required: true
        },
        {
          prompt: "Design",
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          required: true
        },
        {
          prompt: "Battery Life",
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          required: true
        },
        {
          prompt: "Comfort",
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          required: true
        }
      ],
      scale_width: 500,
      data: { task: 'preference_rating' }
    };


  // ========== STEP 4: DEFINE HEADPHONE DATA ==========
    const headphones = [
      { name: "H1", price: 2500, sound: 6, design: 5, battery: 7, comfort: 6 },
      { name: "H2", price: 4000, sound: 8, design: 6, battery: 6, comfort: 7 },
      { name: "H3", price: 5500, sound: 7, design: 8, battery: 5, comfort: 6 },
      { name: "H4", price: 3000, sound: 5, design: 7, battery: 8, comfort: 8 },
      { name: "H5", price: 4500, sound: 9, design: 6, battery: 4, comfort: 5 },
      { name: "H6", price: 6000, sound: 7, design: 7, battery: 7, comfort: 5 }
    ];

  // 12-item and 24-item sets (shortened for brevity)
  const headphones_12 = [
    {name:"H7", price:3200, sound:6, design:5, battery:7, comfort:6},
    {name:"H8", price:3800, sound:7, design:8, battery:5, comfort:7},
    {name:"H9", price:4200, sound:8, design:7, battery:6, comfort:6},
    {name:"H10", price:4800, sound:9, design:6, battery:5, comfort:7},
    {name:"H11", price:5200, sound:7, design:7, battery:6, comfort:8},
    {name:"H12", price:5600, sound:8, design:9, battery:5, comfort:5},
    {name:"H13", price:6000, sound:7, design:8, battery:8, comfort:6},
    {name:"H14", price:6600, sound:9, design:7, battery:7, comfort:5},
    {name:"H15", price:7200, sound:6, design:6, battery:9, comfort:7},
    {name:"H16", price:7800, sound:8, design:8, battery:6, comfort:8},
    {name:"H17", price:8500, sound:9, design:9, battery:7, comfort:6},
    {name:"H18", price:9000, sound:7, design:7, battery:8, comfort:7}
  ];

  const headphones_24 = [
    {name:"H19", price:2500, sound:6, design:5, battery:8, comfort:7},
    {name:"H20", price:2800, sound:7, design:6, battery:6, comfort:8},
    {name:"H21", price:3100, sound:8, design:7, battery:5, comfort:6},
    {name:"H22", price:3400, sound:6, design:8, battery:7, comfort:7},
    {name:"H23", price:3700, sound:9, design:7, battery:5, comfort:6},
    {name:"H24", price:4000, sound:8, design:9, battery:6, comfort:5},
    {name:"H25", price:4300, sound:7, design:8, battery:8, comfort:6},
    {name:"H26", price:4600, sound:6, design:6, battery:7, comfort:7},
    {name:"H27", price:4900, sound:9, design:7, battery:6, comfort:6},
    {name:"H28", price:5200, sound:8, design:8, battery:7, comfort:8},
    {name:"H29", price:5500, sound:7, design:9, battery:6, comfort:7},
    {name:"H30", price:5800, sound:8, design:8, battery:8, comfort:7},
    {name:"H31", price:6100, sound:9, design:7, battery:9, comfort:6},
    {name:"H32", price:6400, sound:8, design:9, battery:7, comfort:7},
    {name:"H33", price:6700, sound:7, design:7, battery:8, comfort:8},
    {name:"H34", price:7000, sound:9, design:8, battery:6, comfort:7},
    {name:"H35", price:7300, sound:8, design:7, battery:9, comfort:6},
    {name:"H36", price:7600, sound:7, design:9, battery:8, comfort:7},
    {name:"H37", price:8000, sound:9, design:9, battery:7, comfort:6},
    {name:"H38", price:8500, sound:8, design:8, battery:9, comfort:7},
    {name:"H39", price:9000, sound:9, design:7, battery:8, comfort:6},
    {name:"H40", price:9500, sound:8, design:9, battery:9, comfort:7},
    {name:"H41", price:10000, sound:9, design:8, battery:7, comfort:8},
    {name:"H42", price:10500, sound:9, design:9, battery:9, comfort:8}
  ];

// ========== STEP 5: GENERATE CHOICE PAGE DYNAMICALLY ==========
// ========== GENERIC CHOICE TRIAL GENERATOR (works for 6/12/24 sets) ==========
const generateChoiceTrial = (items, title, set_size, ordered) => {
  // Clone the incoming array so we don't mutate originals
  let headphoneList = items.map(h => ({ ...h }));

  // Pull preference weights from your earlier Likert block
  const prefRow = jsPsych.data.get().filter({ task: 'preference_rating' }).values()[0];
  const prefData = prefRow.response || prefRow.responses || {};
  // Support both SurveyLikert response shapes (jsPsych v7 vs v8)
  const weights = [
    Number(prefData.Q0), // Price
    Number(prefData.Q1), // Sound Quality
    Number(prefData.Q2), // Design
    Number(prefData.Q3), // Battery Life
    Number(prefData.Q4)  // Comfort
  ];

  // Compute preference score for each headphone
  headphoneList.forEach(h => {
    const priceScore = (1 / h.price) * 10000 * weights[0];
    h.score = (
      priceScore +
      h.sound * weights[1] +
      h.design * weights[2] +
      h.battery * weights[3] +
      h.comfort * weights[4]
    );
  });

  // Order or randomize
  if (ordered) {
    headphoneList.sort((a, b) => b.score - a.score);
  } else {
    headphoneList = jsPsych.randomization.shuffle(headphoneList);
  }

  // Condition banner
  const conditionMessage = ordered
    ? `<div style="background:#e8f5e9;border-left:5px solid #2e7d32;padding:10px;margin-bottom:15px;">
         <b>Note:</b> The following headphone options have been arranged according to your stated preferences.
       </div>`
    : `<div style="background:#fff3e0;border-left:5px solid #ef6c00;padding:10px;margin-bottom:15px;">
         <b>Note:</b> The following headphone options are arranged in random order.
       </div>`;

  // Table
  const tableRows = headphoneList.map(h => `
    <tr>
      <td>${h.name}</td>
      <td>${h.price}</td>
      <td>${h.sound}</td>
      <td>${h.design}</td>
      <td>${h.battery}</td>
      <td>${h.comfort}</td>
      <td><input type="radio" name="headphone_choice" value="${h.name}" required></td>
    </tr>
  `).join('');

  return {
    type: jsPsychSurveyHtmlForm,
    preamble: `
      <h2>${title}</h2>
      ${conditionMessage}
      <p><b>1.</b> Out of the given options, <b>pick the headphones you would prefer to buy.</b></p>
      <table>
        <tr>
          <th>Product</th><th>Price (₹)</th><th>Sound Quality</th>
          <th>Design</th><th>Battery Life</th><th>Comfort</th><th>Your Choice</th>
        </tr>
        ${tableRows}
      </table>
    `,
    html: "",
    button_label: "Next",
    data: {
      task: "headphone_choice",
      set_size,
      treatment: ordered ? "ordered" : "random",
      preference_weights: weights
    }
  };
};



  // ✅ Step 6: Follow-up Questions (7-point Likert)
  const post_choice_feedback = {
    type: jsPsychSurveyLikert,
    preamble: "<h3>Now, please answer the following questions:</h3>",
    questions: [
      {
        prompt: "How satisfied are you with your choice?",
        labels: ["1<br>(Not satisfied)", "2", "3", "4", "5", "6", "7<br>(Very satisfied)"],
        required: true
      },
      {
        prompt: "Did you feel overwhelmed with the number of options?",
        labels: ["1<br>(Not at all)", "2", "3", "4", "5", "6", "7<br>(Extremely overwhelmed)"],
        required: true
      },
      {
        prompt: "Did your choice match your preference?",
        labels: ["1<br>(Not at all)", "2", "3", "4", "5", "6", "7<br>(Completely matched)"],
        required: true
      }
    ],
    scale_width: 500,
    data: { task: "post_choice_feedback" }
  };




 // ========== BLOCK FACTORY: makes [choiceTrial(items), post_choice_feedback] ==========
const makeChoiceBlock = (items, setTitle, setSize) => {
  return {
    timeline: [],
    on_timeline_start: function() {
      // independent randomization per set (50/50)
      const orderedGroup = Math.random() < 0.5;
      const choiceTrial = generateChoiceTrial(items, setTitle, setSize, orderedGroup);

      // reuse your existing post-choice feedback object but tag set info
      const feedback = {
        ...post_choice_feedback,
        data: { task: "post_choice_feedback", set_size: setSize, treatment: orderedGroup ? "ordered" : "random" }
      };

      this.timeline = [choiceTrial, feedback];
    }
  };
};

// 6-item block (uses your original "headphones" array)
const block6 = makeChoiceBlock(headphones, "Section 3: 6-item Set", 6);

// 12-item block
const block12 = makeChoiceBlock(headphones_12, "Section 4: 12-item Set", 12);

// 24-item block
const block24 = makeChoiceBlock(headphones_24, "Section 5: 24-item Set", 24);

// SECTION 7========== FINAL WRAP-UP QUESTIONS ==========
const final_preferences = {
  type: jsPsychSurveyHtmlForm,
  preamble: "<h2>Final Questions</h2>",
  html: `
    <div class="form-field" style="margin-bottom:18px;">
      <label><b>1) Which set size did you prefer in general?</b></label><br>
      <label><input type="radio" name="preferred_set" value="6" required> 6 items</label><br>
      <label><input type="radio" name="preferred_set" value="12"> 12 items</label><br>
      <label><input type="radio" name="preferred_set" value="24"> 24 items</label>
    </div>

    <div class="form-field">
      <label><b>2) Do you think the order of the list helped in making your choice?</b></label><br>
      <label><input type="radio" name="order_helpful" value="1" required> Not at all</label><br>
      <label><input type="radio" name="order_helpful" value="2"> Slightly</label><br>
      <label><input type="radio" name="order_helpful" value="3"> Somewhat</label><br>
      <label><input type="radio" name="order_helpful" value="4"> Quite a bit</label><br>
      <label><input type="radio" name="order_helpful" value="5"> Extremely</label>
    </div>
  `,
  button_label: "Finish",
  data: { task: "final_wrapup" },
  };


  // Use the local proxy endpoint when serving via the proxy (e.g. http://localhost:3000)
  // This forwards requests server-side to the Apps Script and avoids CORS issues.
  // If you later remove the proxy, replace this value with your Apps Script /exec URL.
  const APPS_SCRIPT_URL = window.location.origin + '/save';

async function sendResultsToSheet(payload) {
  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    console.log('Sheet response:', json);
    return json;
  } catch (err) {
    console.error('Failed to send results to sheet', err);
    return { status: 'error', message: err.toString() };
  }
}

function getParticipantFromDemographics() {
  const demoRow = jsPsych.data.get().filter({ task: 'demographics' }).values()[0];
  if (!demoRow) return '';
  const resp = demoRow.response || demoRow.responses || {};
  // your demographics form uses name="name"
  return resp.name || resp.participant || '';
}

async function finishAndSave() {
  const payload = {
    participant: getParticipantFromDemographics(),
    // send structured data (array of trial result objects)
    data: jsPsych.data.get().values()
  };

  // show a small saving overlay
  const overlay = document.createElement('div');
  overlay.id = 'saving-overlay';
  overlay.style = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;color:white;font-size:18px;z-index:9999';
  overlay.innerHTML = '<div style="background:#222;padding:18px;border-radius:6px;">Saving your responses... Please wait</div>';
  document.body.appendChild(overlay);

  // try sending once, if fails allow one retry
  let result = await sendResultsToSheet(payload);
  if (!result || result.status !== 'success') {
    console.warn('Initial save failed, retrying...');
    await new Promise(r => setTimeout(r, 1000));
    result = await sendResultsToSheet(payload);
  }

  document.body.removeChild(overlay);

  if (result && result.status === 'success') {
    console.log('Save successful.');
  } else {
    console.error('Save failed after retry:', result);
    // optional: persist to localStorage so researcher can retrieve
    try {
      localStorage.setItem('pending_experiment_data', JSON.stringify(payload.data));
      alert('Saving failed. Responses were saved locally and will be retried later. Please contact the researcher if problems persist.');
    } catch (e) {
      alert('Saving failed and local save also failed. Please contact the researcher.');
    }
  }
}


// KEEP UDATING AS EVERY SECTION IS ADDED
  const timeline = [
  welcome_instructions,
  demographics,
  preference_rating,
  block6,
  block12,
  block24,
  final_preferences];

// Single, final init (assign the instance)
const jsPsych = initJsPsych({
  timeline: timeline,
  on_finish: async function() {
    await finishAndSave();
  }
});


  // ✅ Run experiment
  jsPsych.run(timeline);
