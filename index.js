document.querySelector("#form").addEventListener("submit", function() {
  var jobtitle = document.querySelector("#jobtitle").value;
  var jobprofile = document.querySelector("#jobprofile").value;
  var qualifications = document.querySelector("#qualifications").value;
  var requiredskills = document.querySelector("#requiredskills").value;
  var jobtype = document.querySelector("#jobtype").value;
  var experience = document.querySelector("#experience").value;
    var education = document.querySelector("#education").value;
    var jobdescription = document.querySelector("#jobdescription").value;
    var date = document.querySelector("#date").value;
    var submit = document.querySelector("#submit").value;
  var template = `
    <div class="container" id="head">
                <div class="mb-5">
                    <h5 class="team">${jobtitle}
                        <span class="float-right"> <i class="fa fa-arrow-left mr-2"></i>BACK TO OPENINGS</span></h5>
                    <p class="mb--8"> Lagos.</p>
                </div>

                <div>

                    <div class="mb-3">${jobdescription} </div>
                    <div class="mb-3">
                        <h5 class="textdark">Job Profile </h5>

                        <p> ${jobprofile}</p>
                    </div>
                    <div class="mb-3">
                        <h5 class="textdark"> Qualification:</h5>
                        <p>${qualifications}
                        </p>
                    </div>
                    <div class="mb-3">
                        <h5 class="textdark">Required Skills:</h5>
                        <p>${requiredskills}</p>
                    </div>
                    <div class="mb-3">
                        <h5 class="textdark">Job Type:</h5>
                        <p> ${jobtype} </p>
                    </div>
                    <div class="mb-3">
                        <h5 class="textdark">Experience:</h5>
                        <p>  ${experience}</p>
                    </div>
                    <div class="mb-3">
                        <h5 class="textdark">Education:</h5>
                        <p>${education} </p>
                    </div>
                    <div class="mb-3">
                        <p>Application close on <span class="textdark">${date} </br></span>
                        <div>
                            <a class="btn btn-success" href="${submit}" id="btn-apply">Apply</a>
                        </div>
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
  link.setAttribute("download", `${jobtitle.value}.txt`);
  //link.appendChild(document.createTextNode("Save file"));
    document.body.appendChild(link);
    link.click()
}
