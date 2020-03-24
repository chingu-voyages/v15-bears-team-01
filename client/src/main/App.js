import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset as resetStyles } from 'styled-reset';

import Routes from './routes';
import AuthProvider from '../auth/auth_provider';

const GlobalStyles = createGlobalStyle`
${resetStyles}

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900&display=swap');
 
  .border{
    border: 5px solid black;
  }
  *,*:before,*:after {
      margin:0;
      padding:0;
      box-sizing:border-box;
  }
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */
    line-height: 1.6;
    font-weight: 400;
    font-family: 'Source Sans Pro', sans-serif;
      sans-serif;
    color: #222;
  }
  .App {
    text-align: center;
    /* background: ${props => props.theme.dark}; */
  }
  button, link {
    cursor: pointer;
  }
  a {
    color: ${props => props.theme.linkText}
  }

  .container {
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .column,
  .columns {
    width: 100%;
    float: left;
    box-sizing: border-box;
  }
  
  /* For devices larger than 400px */
  @media (min-width: 400px) {
    .container {
      width: 85%;
      padding: 0;
    }
  }
  
  /* For devices larger than 550px */
  @media (min-width: 550px) {
    .container {
      width: 80%;
    }
    .column,
    .columns {
      margin-left: 4%;
    }
    .column:first-child,
    .columns:first-child {
      margin-left: 0;
    }
  
    .one.column,
    .one.columns {
      width: 4.66666666667%;
    }
    .two.columns {
      width: 13.3333333333%;
    }
    .three.columns {
      width: 22%;
    }
    .four.columns {
      width: 30.6666666667%;
    }
    .five.columns {
      width: 39.3333333333%;
    }
    .six.columns {
      width: 48%;
    }
    .seven.columns {
      width: 56.6666666667%;
    }
    .eight.columns {
      width: 65.3333333333%;
    }
    .nine.columns {
      width: 74%;
    }
    .ten.columns {
      width: 82.6666666667%;
    }
    .eleven.columns {
      width: 91.3333333333%;
    }
    .twelve.columns {
      width: 100%;
      margin-left: 0;
    }
  
    .one-third.column {
      width: 30.6666666667%;
    }
    .two-thirds.column {
      width: 65.3333333333%;
    }
  
    .one-half.column {
      width: 48%;
    }
  
    /* Offsets */
    .offset-by-one.column,
    .offset-by-one.columns {
      margin-left: 8.66666666667%;
    }
    .offset-by-two.column,
    .offset-by-two.columns {
      margin-left: 17.3333333333%;
    }
    .offset-by-three.column,
    .offset-by-three.columns {
      margin-left: 26%;
    }
    .offset-by-four.column,
    .offset-by-four.columns {
      margin-left: 34.6666666667%;
    }
    .offset-by-five.column,
    .offset-by-five.columns {
      margin-left: 43.3333333333%;
    }
    .offset-by-six.column,
    .offset-by-six.columns {
      margin-left: 52%;
    }
    .offset-by-seven.column,
    .offset-by-seven.columns {
      margin-left: 60.6666666667%;
    }
    .offset-by-eight.column,
    .offset-by-eight.columns {
      margin-left: 69.3333333333%;
    }
    .offset-by-nine.column,
    .offset-by-nine.columns {
      margin-left: 78%;
    }
    .offset-by-ten.column,
    .offset-by-ten.columns {
      margin-left: 86.6666666667%;
    }
    .offset-by-eleven.column,
    .offset-by-eleven.columns {
      margin-left: 95.3333333333%;
    }
  
    .offset-by-one-third.column,
    .offset-by-one-third.columns {
      margin-left: 34.6666666667%;
    }
    .offset-by-two-thirds.column,
    .offset-by-two-thirds.columns {
      margin-left: 69.3333333333%;
    }
  
    .offset-by-one-half.column,
    .offset-by-one-half.columns {
      margin-left: 52%;
    }
  }

  * Typography
–––––––––––––––––––––––––––––––––––––––––––––––––– */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300;
}
h1 {
  font-size: 4rem;
  line-height: 1.2;
  letter-spacing: -0.1rem;
}
h2 {
  font-size: 3.6rem;
  line-height: 1.25;
  letter-spacing: -0.1rem;
}
h3 {
  font-size: 3rem;
  line-height: 1.3;
  letter-spacing: -0.1rem;
}
h4 {
  font-size: 2.4rem;
  line-height: 1.35;
  letter-spacing: -0.08rem;
}
h5 {
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -0.05rem;
}
h6 {
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0;
}

/* Larger than phablet */
@media (min-width: 550px) {
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 4.2rem;
  }
  h3 {
    font-size: 3.6rem;
  }
  h4 {
    font-size: 3rem;
  }
  h5 {
    font-size: 2.4rem;
  }
  h6 {
    font-size: 1.5rem;
  }
}

p {
  margin-top: 0;
}


/* Misc
–––––––––––––––––––––––––––––––––––––––––––––––––– */
hr {
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  border-width: 0;
  border-top: 1px solid #e1e1e1;
}

/* Clearing
–––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Self Clearing Goodness */
.container:after,
.row:after,
.u-cf {
  content: "";
  display: table;
  clear: both;
}

/* Media Queries
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/*
Note: The best way to structure the use of media queries is to create the queries
near the relevant code. For example, if you wanted to change the styles for buttons
on small devices, paste the mobile query code up in the buttons section and style it
there.
*/

/* Larger than mobile */
@media (min-width: 400px) {
}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {
}

/* Larger than tablet */
@media (min-width: 750px) {
}

/* Larger than desktop */
@media (min-width: 1000px) {
}

/* Larger than Desktop HD */
@media (min-width: 1200px) {
}




`;

const theme = {
  white: '#fff',
  dark: 'navy',
  linkText: '#fcfcfc'
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
