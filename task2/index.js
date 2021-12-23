const search = location.search;
const params = new URLSearchParams(search);

const sizeCheckBoxCheck = (size) => {
  const checkBox = document.getElementById(`size${size}`);
  checkBox.checked = true;
};

const colorCheckBoxCheck = (color) => {
  const checkBox = document.getElementById(`color${color}`);
  checkBox.checked = true;
};

const selectCheck = (manufacturer) => {
  const select = document.getElementById(`select`);
  const optionsArray = Array.from(select.options);
  let option = optionsArray.find((item) => item.value === manufacturer);
  option.selected = true;
};

const radioSize = document.querySelectorAll('.radioSize');

radioSize.forEach((element) => {
  element.addEventListener('click', (e) => {
    params.set('size', e.target.value);
    console.log(params.toString());
  });
});

const colorCheckBox = document.querySelectorAll('.colorCheckBox');

colorCheckBox.forEach((element) => {
  element.addEventListener('click', (e) => {
    const colorArray = params.getAll('color');
    const colorIndex = colorArray.indexOf(e.target.value);
    params.delete('color');
    if (colorIndex == -1) {
      colorArray.push(e.target.value);
      colorArray.forEach((item) => {
        params.append('color', item);
      });
    } else {
      colorArray.splice(colorIndex, 1);
      colorArray.forEach((item) => {
        params.append('color', item);
      });
    }
    console.log(params.toString());
  });
});

const select = document.getElementById('select');

select.addEventListener('change', (e) => {
  params.delete('manufacturer');
  const selectedOptions = Array.from(e.target.selectedOptions);
  selectedOptions.forEach((item) => {
    params.append('manufacturer', item.value);
  });
  console.log(params.toString());
});

const addParams = (param, value) => {
  switch (param) {
    case 'size': {
      sizeCheckBoxCheck(value);
      return;
    }
    case 'color': {
      colorCheckBoxCheck(value);
      return;
    }
    case 'manufacturer': {
      selectCheck(value);
      return;
    }

    default:
      return;
  }
};

for (var pair of params.entries()) {
  addParams(pair[0], pair[1]);
}
