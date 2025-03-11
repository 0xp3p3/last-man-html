// Last Man Standing Whitelist Scripts
/////// REFERRALS
// Function to get query parameters
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Fetch influencer data from the JSON file
let influencers = [];
fetch('_lib/d/j/r.json') // Path to your JSON file
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    influencers = data; // Store the influencer data
    // Delay the referral logic by 2 seconds
    setTimeout(() => {
      handleReferral();
    }, 5500); // 2000 milliseconds = 2 seconds
  })
  .catch(error => {
    console.error('Error loading influencer data:', error);
    // Delay the invalid referral content by 2 seconds
    setTimeout(() => {
      serveInvalidReferralContent();
    }, 5500); // 2000 milliseconds = 2 seconds
  });

// Handle referral logic
function handleReferral() {
  const referralId = getQueryParameter('ref'); // Get the referral ID from the URL

  if (referralId) {
    const influencer = influencers.find(inf => inf.id === referralId); // Find the influencer by ID

    if (influencer) {
      // Serve valid referral content
      serveValidReferralContent(influencer);
    } else {
      // Serve invalid referral content
      serveInvalidReferralContent();
    }
  } else {
    // Serve invalid referral content if no referral ID is provided
    serveInvalidReferralContent();
  }
}

// Serve valid referral content
function serveValidReferralContent(influencer) {
  fetch('/assets/html/referral/valid.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load valid referral content');
      }
      return response.text();
    })
    .then(html => {
      const referralContent = document.getElementById('referral-content');
      referralContent.innerHTML = html;

      // Replace the {{linked-influencer-name}} placeholder
      replaceInfluencerName(influencer);

      // Trigger fade-in effect
      setTimeout(() => {
        const content = referralContent.querySelector('.fade-content');
        if (content) {
          content.classList.add('visible');
        }
      }, 10);

      // Set up the form toggle functionality
      setupFormToggle('toggleFormButton2', 'formContent2');
    })
    .catch(error => {
      console.error('Error loading valid referral content:', error);
      document.getElementById('referral-content').innerHTML = '<p>Failed to load referral content. Please try again later.</p>';
    });
}

function serveInvalidReferralContent() {
  fetch('/assets/html/referral/invalid.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load invalid referral content');
      }
      return response.text();
    })
    .then(html => {
      const referralContent = document.getElementById('referral-content');
      referralContent.innerHTML = html;

      // Trigger fade-in effect
      setTimeout(() => {
        const content = referralContent.querySelector('.fade-content');
        if (content) {
          content.classList.add('visible');
        }
      }, 10);

      // Set up the form toggle functionality
      setupFormToggle('toggleFormButton', 'formContent');
    })
    .catch(error => {
      console.error('Error loading invalid referral content:', error);
      document.getElementById('referral-content').innerHTML = '<p>Failed to load referral content. Please try again later.</p>';
    });
}

// Replace the {{linked-influencer-name}} placeholder
function replaceInfluencerName(influencer) {
  const placeholder = document.querySelector('.influencer-placeholder');
  if (!placeholder) {
    console.error('Influencer placeholder not found.');
    return;
  }

  // Create a hyperlink for the influencer
  const hyperlink = `<a href="${influencer.link}" target="_blank">${influencer.name}</a>`;
  placeholder.innerHTML = `${hyperlink} invited you to the Private Sale!`;
}

//////// REFERRAL COUNTDOWN
// Function to start the countdown
function startCountdown(seconds, callback) {
  const countdownElement = document.getElementById('referral-countdown');
  // Initialize the countdown
  let remainingTime = seconds;
  // Update the countdown every second
  const intervalId = setInterval(() => {
    remainingTime--; // Decrease the remaining time
    countdownElement.textContent = remainingTime; // Update the displayed number
    // Stop the countdown when it reaches zero
    if (remainingTime <= 0) {
      clearInterval(intervalId); // Clear the interval
      callback(); // Execute the callback function
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// Example usage: Start a 5-second countdown
document.addEventListener('DOMContentLoaded', () => {
  startCountdown(5, () => {
    console.log('Countdown complete! Loading referral content...');
    // Call your referral logic here, e.g., handleReferral()
    handleReferral();
  });
});

///////

// const _0x59a374=_0xeda3;(function(_0x1532fa,_0x4fb564){const _0x5b63dc=_0xeda3,_0x211d4d=_0x1532fa();while(!![]){try{const _0x11c00f=parseInt(_0x5b63dc(0xbd))/(-0x1*0x23de+0x16e8+0xcf7)*(-parseInt(_0x5b63dc(0xde))/(0x1ef4+-0x581*0x5+-0x36d))+-parseInt(_0x5b63dc(0xd8))/(-0x6*-0x4e4+0x6b2+-0x17*0x191)+parseInt(_0x5b63dc(0xce))/(-0x1055*-0x1+-0x22f9+0x1*0x12a8)*(-parseInt(_0x5b63dc(0xe5))/(-0x16d*-0x16+0x1cbd+-0x3c16))+parseInt(_0x5b63dc(0xd6))/(-0x2*0xbce+-0x292+0x1a34)+-parseInt(_0x5b63dc(0xc3))/(0x1c24+0x1*0x6d3+-0x22f0)+parseInt(_0x5b63dc(0xc4))/(-0x12da*0x1+0x3*-0x311+0x1c15)*(-parseInt(_0x5b63dc(0xc9))/(-0x1*0x1791+-0x18e8+0x7*0x6ee))+parseInt(_0x5b63dc(0xba))/(0x1dcc+0x25c1+-0x4383);if(_0x11c00f===_0x4fb564)break;else _0x211d4d['push'](_0x211d4d['shift']());}catch(_0x4a5666){_0x211d4d['push'](_0x211d4d['shift']());}}}(_0x5e63,-0x10078e+0x50cb*0x1b+-0x1*-0x111901));function _0x5e63(){const _0x14f9eb=['minute','2539737mSCHLO','search','test','constructor','debu','.last-updated','8994omcXhH','while\x20(true)\x20{}','function\x20*\x5c(\x20*\x5c)','long','input','day','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','97820uVXVZT','warn','32933200YqACTM','numeric','exception','83lxQPjq','call','stateObject','bind','log','init','4586162dKmLJv','5807864YhbYrj','toString','month','hour12','table','9gNvVcj','length','addEventListener','apply','querySelector','112WgGUNc','gger','(((.+)+)+)+$','year','textContent','info','console','return\x20(function()\x20','2903370OFBGNk'];_0x5e63=function(){return _0x14f9eb;};return _0x5e63();}const _0x27983a=(function(){let _0x274664=!![];return function(_0x500e14,_0x17404f){const _0x325373=_0x274664?function(){if(_0x17404f){const _0x2ccc6b=_0x17404f['apply'](_0x500e14,arguments);return _0x17404f=null,_0x2ccc6b;}}:function(){};return _0x274664=![],_0x325373;};}()),_0x35c7a9=_0x27983a(this,function(){const _0x2ed2b5=_0xeda3;return _0x35c7a9[_0x2ed2b5(0xc5)]()[_0x2ed2b5(0xd9)](_0x2ed2b5(0xd0))[_0x2ed2b5(0xc5)]()[_0x2ed2b5(0xdb)](_0x35c7a9)[_0x2ed2b5(0xd9)](_0x2ed2b5(0xd0));});_0x35c7a9();const _0x385ad6=(function(){let _0x583d7b=!![];return function(_0x597fed,_0x413298){const _0x2a4c45=_0x583d7b?function(){const _0x35f30c=_0xeda3;if(_0x413298){const _0x38168d=_0x413298[_0x35f30c(0xcc)](_0x597fed,arguments);return _0x413298=null,_0x38168d;}}:function(){};return _0x583d7b=![],_0x2a4c45;};}());(function(){_0x385ad6(this,function(){const _0x37de96=_0xeda3,_0x562a20=new RegExp(_0x37de96(0xe0)),_0x2f045a=new RegExp(_0x37de96(0xe4),'i'),_0xcf6a8f=_0x9898b3(_0x37de96(0xc2));!_0x562a20['test'](_0xcf6a8f+'chain')||!_0x2f045a[_0x37de96(0xda)](_0xcf6a8f+_0x37de96(0xe2))?_0xcf6a8f('0'):_0x9898b3();})();}());const _0x604154=(function(){let _0x29b398=!![];return function(_0xc5ef20,_0x1b6490){const _0x5ac86a=_0x29b398?function(){const _0x536f54=_0xeda3;if(_0x1b6490){const _0x2490fe=_0x1b6490[_0x536f54(0xcc)](_0xc5ef20,arguments);return _0x1b6490=null,_0x2490fe;}}:function(){};return _0x29b398=![],_0x5ac86a;};}()),_0x3e482d=_0x604154(this,function(){const _0x590a29=_0xeda3;let _0x48fb22;try{const _0x14d81a=Function(_0x590a29(0xd5)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x48fb22=_0x14d81a();}catch(_0x216e68){_0x48fb22=window;}const _0x994221=_0x48fb22[_0x590a29(0xd4)]=_0x48fb22['console']||{},_0x440430=[_0x590a29(0xc1),_0x590a29(0xb9),_0x590a29(0xd3),'error',_0x590a29(0xbc),_0x590a29(0xc8),'trace'];for(let _0x522857=0x1a39*0x1+-0x1*-0x185f+0x194c*-0x2;_0x522857<_0x440430['length'];_0x522857++){const _0x23dfe9=_0x604154['constructor']['prototype'][_0x590a29(0xc0)](_0x604154),_0x2874de=_0x440430[_0x522857],_0x59af24=_0x994221[_0x2874de]||_0x23dfe9;_0x23dfe9['__proto__']=_0x604154[_0x590a29(0xc0)](_0x604154),_0x23dfe9['toString']=_0x59af24[_0x590a29(0xc5)][_0x590a29(0xc0)](_0x59af24),_0x994221[_0x2874de]=_0x23dfe9;}});_0x3e482d();function getDateTime21HoursAgo(){const _0x32ff05=_0xeda3,_0x2c2810=new Date(),_0x954ce7=new Date(_0x2c2810['getTime']()-(0x1*-0xaa1+-0x1f98+0x876*0x5)*(-0x161*-0x17+0x178f+-0x1b85*0x2)*(0x1055+0xe50+-0xf*0x207)*(0x1ec2+-0x1fcd*0x1+0x4f3)),_0x18c7e0={};_0x18c7e0[_0x32ff05(0xd1)]='numeric',_0x18c7e0[_0x32ff05(0xc6)]=_0x32ff05(0xe1),_0x18c7e0[_0x32ff05(0xe3)]=_0x32ff05(0xbb),_0x18c7e0['hour']='numeric',_0x18c7e0[_0x32ff05(0xd7)]='numeric',_0x18c7e0[_0x32ff05(0xc7)]=!![];const _0x1f66b0=_0x18c7e0;return _0x954ce7['toLocaleString']('en-US',_0x1f66b0);}function _0xeda3(_0x5069ce,_0x9898b3){const _0x385ad6=_0x5e63();return _0xeda3=function(_0x5b4946,_0x35c7a9){_0x5b4946=_0x5b4946-(0x12*0x148+-0x709+-0xf4e);let _0x27983a=_0x385ad6[_0x5b4946];return _0x27983a;},_0xeda3(_0x5069ce,_0x9898b3);}document[_0x59a374(0xcb)]('DOMContentLoaded',()=>{const _0x5a1ab3=_0x59a374,_0x272b27=document[_0x5a1ab3(0xcd)](_0x5a1ab3(0xdd));if(_0x272b27){const _0x3f5b4b=getDateTime21HoursAgo();_0x272b27[_0x5a1ab3(0xd2)]='Last\x20updated:\x20'+_0x3f5b4b;}});function _0x9898b3(_0x26c85b){function _0x4cf8bc(_0x3aaec3){const _0x1a7224=_0xeda3;if(typeof _0x3aaec3==='string')return function(_0x11cbc1){}[_0x1a7224(0xdb)](_0x1a7224(0xdf))[_0x1a7224(0xcc)]('counter');else(''+_0x3aaec3/_0x3aaec3)[_0x1a7224(0xca)]!==0x270e+-0xceb+0x1e*-0xdf||_0x3aaec3%(-0x17af+0x6cf+0x10f4)===-0x8*0x364+0x3*-0x44f+0x280d?function(){return!![];}['constructor'](_0x1a7224(0xdc)+_0x1a7224(0xcf))[_0x1a7224(0xbe)]('action'):function(){return![];}[_0x1a7224(0xdb)](_0x1a7224(0xdc)+'gger')[_0x1a7224(0xcc)](_0x1a7224(0xbf));_0x4cf8bc(++_0x3aaec3);}try{if(_0x26c85b)return _0x4cf8bc;else _0x4cf8bc(0x4*0x8c9+0xc5+-0x1d*0x13d);}catch(_0x5b44eb){}}

// Function to calculate the date and time 21 hours ago
function getDateTime21HoursAgo() {
  const now = new Date(); // Current date and time
  const twentyOneHoursAgo = new Date(now.getTime() - 21 * 60 * 60 * 1000); // Subtract 21 hours in milliseconds

  // Format the date and time (e.g., "October 25, 2023, 3:45 PM")
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return twentyOneHoursAgo.toLocaleString('en-US', options);
}

// Replace "yesterday" with the calculated date and time
document.addEventListener('DOMContentLoaded', () => {
  const contentElement = document.querySelector('.last-updated'); // Target the element containing the text
  if (contentElement) {
    const dateTime21HoursAgo = getDateTime21HoursAgo();
    contentElement.textContent = `Last updated: ${dateTime21HoursAgo}`;
  }
});

///////


//////////////// WHITELIST & ENTER PRESALE FORMs (valid.html & invalid.html)

// Reusable function to set up form toggle logic
function setupFormToggle(buttonId, contentId) {
  const toggleFormButton = document.getElementById(buttonId);
  const formContent = document.getElementById(contentId);

  if (!toggleFormButton || !formContent) {
    console.error(`Form toggle button (${buttonId}) or form content (${contentId}) not found.`);
    return;
  }

  // Add a click event listener to the button
  toggleFormButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Toggle the visibility of the form content
    if (formContent.classList.contains('visible')) {
      formContent.classList.remove('visible'); // Hide the form
      toggleFormButton.textContent = buttonId === 'toggleFormButton' 
        ? 'Subscribe to be Notified' 
        : 'Get on the Whitelist'; // Reset button text
    } else {
      formContent.classList.add('visible'); // Show the form
      toggleFormButton.textContent = buttonId === 'toggleFormButton' 
        ? 'Add Me to the List' 
        : 'Add Me to the Whitelist'; // Update button text
    }
  });
}

// Call the setup functions after injecting content
document.addEventListener('DOMContentLoaded', () => {
  // For invalid.html
  setupFormToggle('toggleFormButton', 'formContent');

  // For valid.html
  setupFormToggle('toggleFormButton2', 'formContent2');
});

// validate
$('#subscribeToPresale').validate();
$('#formEnterPresale').validate();