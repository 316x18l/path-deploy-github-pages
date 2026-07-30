// ここからコードを書いてください
export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  const lengthUnits = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  for (let i = 0; i <= lengthUnits.length - 1; i++) {
    const fromUnitOption = document.createElement("option");
    fromUnitOption.setAttribute("value", lengthUnits[i].base);
    fromUnitOption.textContent = lengthUnits[i].name;
    converterFrom.appendChild(fromUnitOption);

    const toUnitOption = document.createElement("option");
    toUnitOption.setAttribute("value", lengthUnits[i].base);
    toUnitOption.textContent = lengthUnits[i].name;
    converterTo.appendChild(toUnitOption);
  }

  converterFrom.selectedIndex = 0;
  converterTo.selectedIndex = 1;

  function convertUnits() {
    const inputValue = parseFloat(converterInput.value);

    if (isNaN(inputValue)) {
      return (converterResult.textContent = "Please enter a valid number");
    }

    const fromBase = parseFloat(converterFrom.value);
    const toBase = parseFloat(converterTo.value);

    const convertedValue = (inputValue * fromBase) / toBase;

    const fromUnit = lengthUnits.find((unit) => {
      return unit.base === fromBase;
    });

    const toUnit = lengthUnits.find((unit) => {
      return unit.base === toBase;
    });

    const inputValueStr = converterInput.value;
    const fromUnitName = fromUnit.name;
    const convertedValueStr = convertedValue.toFixed(3);
    const toUnitName = toUnit.name;

    converterResult.textContent = `${inputValueStr} ${fromUnitName} = ${convertedValueStr} ${toUnitName}`;
  }

  converterForm.addEventListener("input", convertUnits);

  convertUnits();
}
