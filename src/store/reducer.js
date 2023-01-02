const time = new Date().getHours();
let lightTheme;

const setTheme = () => {
  if(6<time && time<18){
    lightTheme=true;
  }else{
    lightTheme=false;
  }
}

setTheme();

const isLightTheme = (state = lightTheme, action) => {
  switch(action.type){
    case 'CHANGE': 
      return !state
    default: {
      return state
    }
  }
}

export default isLightTheme;
