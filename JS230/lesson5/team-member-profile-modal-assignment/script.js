// Team Member Profile Modals
// Use:  jQuery, Handlebars.js
// 1. When DOMContentLoaded first
//     1. Create teamDiv and init to team div element
//     2. Create modal and init to modal div element
//     3. Create teamMember and init undefined
//     4. Add click event listener on teamDiv
//         1. Prevent default behavior
//         2. If the targets tag name is ‘A’
//             1. Set the modal display style to block

// 2. Add exit X image to div html 
//     1. Find it by its exit id and add click event listener
//     2. If clicked, set the modal display style to none

// 3. Create Handlerbars template to plug in clicked teamMemeber name and matching description

const descriptions = {
  kevin: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  louis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  kasper: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  chris: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }

let teamInfo = {}

$(function() {
  let teamDiv = $("#team").first();
  let modal;
  let teamMember;

  teamDiv.click(function(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      teamMember = e.target.textContent.trim();
      teamInfo.name = teamMember;
      teamInfo.imgSrc = `images/img_${teamMember.toLowerCase()}.jpg`;
      teamInfo.description = descriptions[teamMember.toLowerCase()];

      let template = Handlebars.compile($('#modalTemplate').html());
      let filled = template(teamInfo);
      let modalSection = $("#modal-section");
      modalSection.html(filled);
      modal = $("#modal")[0];
      console.log(modal)

      let closeBtn = $("#close");
      closeBtn.click(function() {
        modal.style.display = "none";
      });

      $(document).keyup(function(e) {
        if (e.key === 'Escape') {
          modal.style.display = "none";
        }
      });
    }
  });

})