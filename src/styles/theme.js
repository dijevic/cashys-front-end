import { keyframes } from 'styled-components'


export const theme = {

    colors: {

        white: 'var(--white)',
        blue: 'var(--blue)',
        blueGrey: 'var(--blue-grey)',
        purple: 'var(--purple)',
        black: 'var(--black)',
        burgundy: 'var(--burgundy)',

        // light color
        lightBlue: 'var(--light-blue)',
        lightBurgundy: 'var(--light-burgundy)'



    },

    // BUTTON TYPES
    buttonTypes: {

        buttom: 'buttom',
        buttonLink: 'buttom-link',
        link: 'link',

    },


    // animations 
    animations: {
        fadeInLeft: keyframes`
        from {
          opacity:0;
          transform: translateX(-100px);
        }
      
        to {
          opacity : 1;
          transform: translateX(0);
      
        }`,


        fadeInup: keyframes`
        from {
          opacity:0;
          transform: translateY(-100px);
        }
      
        to {
          opacity : 1;
          transform: translateY(0);
      
        }`,

        moveUpToDown: keyframes`
        from {
            transform: translateY(-20px);
        }
        to{
            transform: translateY(0px);

        }
        
        
        `,
        moveDownToUp: keyframes`
        from {
            transform: translateY(20px);
        }
        to{
            transform: translateY(-40px);

        }
        
        
        `,




    }




}
