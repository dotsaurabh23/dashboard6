// side bar 
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const ANIMATION_DURATION = 300;

const SIDEBAR_EL = document.getElementById("sidebar");

const SUB_MENU_ELS = document.querySelectorAll(
".menu > ul > .menu-item.sub-menu");


const FIRST_SUB_MENUS_BTN = document.querySelectorAll(
".menu > ul > .menu-item.sub-menu > a");


const INNER_SUB_MENUS_BTN = document.querySelectorAll(
".menu > ul > .menu-item.sub-menu .menu-item.sub-menu > a");


class PopperObject {




  constructor(reference, popperTarget) {_defineProperty(this, "instance", null);_defineProperty(this, "reference", null);_defineProperty(this, "popperTarget", null);
    this.init(reference, popperTarget);
  }

  init(reference, popperTarget) {
    this.reference = reference;
    this.popperTarget = popperTarget;
    this.instance = Popper.createPopper(this.reference, this.popperTarget, {
      placement: "right",
      strategy: "fixed",
      resize: true,
      modifiers: [
      {
        name: "computeStyles",
        options: {
          adaptive: false } },


      {
        name: "flip",
        options: {
          fallbackPlacements: ["left", "right"] } }] });





    document.addEventListener(
    "click",
    e => this.clicker(e, this.popperTarget, this.reference),
    false);


    const ro = new ResizeObserver(() => {
      this.instance.update();
    });

    ro.observe(this.popperTarget);
    ro.observe(this.reference);
  }

  clicker(event, popperTarget, reference) {
    if (
    SIDEBAR_EL.classList.contains("collapsed") &&
    !popperTarget.contains(event.target) &&
    !reference.contains(event.target))
    {
      this.hide();
    }
  }

  hide() {
    this.instance.state.elements.popper.style.visibility = "hidden";
  }}


class Poppers {


  constructor() {_defineProperty(this, "subMenuPoppers", []);
    this.init();
  }

  init() {
    SUB_MENU_ELS.forEach(element => {
      this.subMenuPoppers.push(
      new PopperObject(element, element.lastElementChild));

      this.closePoppers();
    });
  }

  togglePopper(target) {
    if (window.getComputedStyle(target).visibility === "hidden")
    target.style.visibility = "visible";else
    target.style.visibility = "hidden";
  }

  updatePoppers() {
    this.subMenuPoppers.forEach(element => {
      element.instance.state.elements.popper.style.display = "none";
      element.instance.update();
    });
  }

  closePoppers() {
    this.subMenuPoppers.forEach(element => {
      element.hide();
    });
  }}


const slideUp = (target, duration = ANIMATION_DURATION) => {
  const { parentElement } = target;
  parentElement.classList.remove("open");
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = `${duration}ms`;
  target.style.boxSizing = "border-box";
  target.style.height = `${target.offsetHeight}px`;
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};
const slideDown = (target, duration = ANIMATION_DURATION) => {
  const { parentElement } = target;
  parentElement.classList.add("open");
  target.style.removeProperty("display");
  let { display } = window.getComputedStyle(target);
  if (display === "none") display = "block";
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = `${duration}ms`;
  target.style.height = `${height}px`;
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

const slideToggle = (target, duration = ANIMATION_DURATION) => {
  if (window.getComputedStyle(target).display === "none")
  return slideDown(target, duration);
  return slideUp(target, duration);
};

const PoppersInstance = new Poppers();

/**
 * wait for the current animation to finish and update poppers position
 */
const updatePoppersTimeout = () => {
  setTimeout(() => {
    PoppersInstance.updatePoppers();
  }, ANIMATION_DURATION);
};

/**
 * sidebar collapse handler
 */
document.getElementById("btn-collapse").addEventListener("click", () => {
  SIDEBAR_EL.classList.toggle("collapsed");
  PoppersInstance.closePoppers();
  if (SIDEBAR_EL.classList.contains("collapsed"))
  FIRST_SUB_MENUS_BTN.forEach(element => {
    element.parentElement.classList.remove("open");
  });

  updatePoppersTimeout();
});

/**
 * sidebar toggle handler (on break point )
 */
document.getElementById("btn-toggle").addEventListener("click", () => {
  SIDEBAR_EL.classList.toggle("toggled");

  updatePoppersTimeout();
});

/**
 * toggle sidebar on overlay click
 */
document.getElementById("overlay").addEventListener("click", () => {
  SIDEBAR_EL.classList.toggle("toggled");
});

const defaultOpenMenus = document.querySelectorAll(".menu-item.sub-menu.open");

defaultOpenMenus.forEach(element => {
  element.lastElementChild.style.display = "block";
});

/**
 * handle top level submenu click
 */
FIRST_SUB_MENUS_BTN.forEach(element => {
  element.addEventListener("click", () => {
    if (SIDEBAR_EL.classList.contains("collapsed"))
    PoppersInstance.togglePopper(element.nextElementSibling);else
    {
      const parentMenu = element.closest(".menu.open-current-submenu");
      if (parentMenu)
      parentMenu.
      querySelectorAll(":scope > ul > .menu-item.sub-menu > a").
      forEach(
      (el) =>
      window.getComputedStyle(el.nextElementSibling).display !==
      "none" && slideUp(el.nextElementSibling));

      slideToggle(element.nextElementSibling);
    }
  });
});

/**
 * handle inner submenu click
 */
INNER_SUB_MENUS_BTN.forEach(element => {
  element.addEventListener("click", () => {
    slideToggle(element.nextElementSibling);
  });
});


// side bar 


// map setting start 

document.addEventListener("DOMContentLoaded", function () {
  var map = new MapmyIndia.Map("map", { center: [28.4595, 77.0266], zoomControl: true });

  // Define a tile layer source
  var tileLayerSource = new MapmyIndia.TileLayerSource({ apikey: 'de559e0d55b56823b09ddbf72cddabc2' });

  // Create a tile layer with the source
  var tileLayer = new MapmyIndia.Layer.Tile({ source: tileLayerSource });

  // Add the tile layer to the map
  map.addLayer(tileLayer);
});

// map setting end


document.addEventListener("DOMContentLoaded", function () {
  // Fetch the CSV file using the Fetch API
  fetch('data.csv')
      .then(response => response.text())
      .then(csvData => {
          // Parse CSV data using PapaParse
          var parsedData = Papa.parse(csvData, { header: true });

          // Process the parsed data to count indents per company
          var companyIndentCount = {};
          parsedData.data.forEach(row => {
              var companyName = row['Company Name'];
              if (companyName) {
                  if (companyIndentCount[companyName]) {
                      companyIndentCount[companyName]++;
                  } else {
                      companyIndentCount[companyName] = 1;
                  }
              }
          });

          // Create data for the bar graph
          var data = [{
              x: Object.keys(companyIndentCount),
              y: Object.values(companyIndentCount),
              type: 'bar'
          }];

          // Create layout for the bar graph
          var layout = {
              title: 'Indent Count by Company',
              xaxis: {
                  title: 'Company Name'
              },
              yaxis: {
                  title: 'Indent Count'
              }
              
          };
          var config = {
            displayModeBar: false // Set displayModeBar to false to hide the modebar
        };
          // Create the bar graph using Plotly.js
          Plotly.newPlot('bar-graph', data, layout,config);
      })
      .catch(error => {
          console.error('Error fetching CSV data:', error);
      });
});



//  stack graph 

  // Function to fetch and parse CSV data
    async function fetchData() {
        try {
            // Fetch the CSV file
            const response = await fetch('data.csv');
            const csvData = await response.text();

            // Parse CSV data
            const parsedData = Papa.parse(csvData, { header: true, skipEmptyLines: true }).data;

            // Group data by Company Name and Product
            const groupedData = parsedData.reduce((acc, entry) => {
                const key = `${entry['Company Name']} - ${entry['Product']}`;
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(entry);
                return acc;
            }, {});

            // Create traces for each product
            const traces = [];
            for (const key in groupedData) {
                const data = groupedData[key];
                const xValues = data.map(entry => entry['Company Name']);
                const yValues = data.map(entry => parseFloat(entry['Quantity']));
                const productName = data[0]['Product'];
                const companyName = data[0]['Company Name'];

                traces.push({
                    x: xValues,
                    y: yValues,
                    type: 'bar',
                    name: `${companyName} - ${productName}`,
                });
            }

            // Create layout
            const layout = {
                barmode: 'stack',
                xaxis: { title: 'Company Name' },
                yaxis: { title: 'Quantity (KL)' },
                title: 'Stacked Bar Chart of Quantity by Company and Product',
            };

            // Plot the chart
            Plotly.newPlot('stacked-bar-chart', traces, layout);
        } catch (error) {
            console.error('Error fetching or parsing data:', error);
        }
    }

    // Call the fetchData function when the page loads
    window.addEventListener('load', fetchData);