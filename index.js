document.querySelector("#form").addEventListener("submit", function() {
  var title = document.querySelector("#title").value;
  var description = document.querySelector("#description").value;
  var requirement = document.querySelector("#requirement").value;
  var specification = document.querySelector("#specification").value;
  var deadline = document.querySelector("#deadline").value;
  var template = `
    <div class="container" id="head">
                <div class="mb-5">
                    <h5 class="team">${title}
                        <span class="float-right"> <i class="fa fa-arrow-left mr-2"></i>BACK TO OPENINGS</span></h5>
                    <p class="mb--8"> Lagos.</p>
                </div>

                <div>

                    <div class="mb-3">${description} </div>
                    <div class="mb-3">
                        <h5 class="textdark">Job Requirement:</h5>

                        <p> ${requirement}</p>
                    </div>
                    <div class="mb-3">
                        <h5 class="textdark">Job Specification:</h5>
                        <p>${specification}
                        </p>
                    </div>
                    
                    
                    <div class="mb-3">
                        <p>Application close on <span class="textdark">${deadline} </br></span>
                        
                    </div>
                </div>
            </div>
    `;
    downloadTemplate(template)
});

function downloadTemplate(html) {
  var fileBlob = new Blob([html], { type: "text/html" });

  var link = document.createElement("a");
  link.setAttribute("href", URL.createObjectURL(fileBlob));
  link.setAttribute("download", `${title.value}.txt`);
  //link.appendChild(document.createTextNode("Save file"));
    document.body.appendChild(link);
    link.click()
}
