// Beneficiary sections 

let beneficiaryCount = 1; // Initialize beneficiary count to 1 for the first beneficiary

        document.addEventListener("DOMContentLoaded", function () {
            const beneficiaryContainer = document.getElementById("beneficiaryContainer");
            const addBeneficiaryLink = document.getElementById("addBeneficiary");

            addBeneficiaryLink.addEventListener("click", function (e) {
                e.preventDefault(); // Prevent the link from navigating

                beneficiaryCount++; // Increment the beneficiary count

                // Create a new beneficiary section
                const newBeneficiary = document.createElement("div");
                newBeneficiary.className = "beneficiary";

                // Set the innerHTML for the new beneficiary section
                newBeneficiary.innerHTML = `
                    <h3 class="mb-2 text-lg font-medium">Δικαιούχος ${beneficiaryCount}</h3>
                    <div class="mb-4">
                        <label for="number_id_beneficiary_${beneficiaryCount}" class="block text-sm font-medium text-gray-700">ΑΦΜ ή Α.Δ.Τ (${beneficiaryCount})</label>
                        <input type="text" id="number_id_beneficiary_${beneficiaryCount}" name="number_id_beneficiary_${beneficiaryCount}" placeholder="ΑΦΜ ή Α.Δ.Τ (${beneficiaryCount})" class="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700" required>
                    </div>

                    <div class="mb-4">
                        <label for="full_name_beneficiary_${beneficiaryCount}" class="block text-sm font-medium text-gray-700">Οναματεπώνυμο Δικαιούχου ${beneficiaryCount}</label>
                        <input type="text" id="full_name_beneficiary_${beneficiaryCount}" name="full_name_beneficiary_${beneficiaryCount}" placeholder="Οναματεπώνυμο Δικαιούχου ${beneficiaryCount}" class="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700" required>
                    </div>

                    <div class="mb-4">
                        <label for="relationship_beneficiary_${beneficiaryCount}" class="block text-sm font-medium text-gray-700">Σχέση ${beneficiaryCount}</label>
                        <input type="text" id="relationship_beneficiary_${beneficiaryCount}" name="relationship_beneficiary_${beneficiaryCount}" placeholder="Σχέση ${beneficiaryCount}" class="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700" required>
                    </div>
                `;

                // Append the new beneficiary section to the container
                beneficiaryContainer.appendChild(newBeneficiary);
            });
        });

        //JavaScript to toggle the collapsible sections 
        window.onscroll = function() { scrollFunction() };

        function scrollFunction() {
            let button = document.getElementById("scrollToTopButton");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        }

        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }