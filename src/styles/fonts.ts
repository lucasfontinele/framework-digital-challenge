import { css } from 'styled-components';

// Inter fonts
import InterRegular from 'static/fonts/Inter-Regular.ttf';

// Poppins fonts
import PoppinsBold from 'static/fonts/Poppins-Bold.ttf';

// Roboto fonts
import RobotoLight from 'static/fonts/Roboto-Light.ttf';
import RobotoThin from 'static/fonts/Roboto-Thin.ttf';
import RobotoRegular from 'static/fonts/Roboto-Regular.ttf';
import RobotoMedium from 'static/fonts/Roboto-Medium.ttf';
import RobotoBold from 'static/fonts/Roboto-Bold.ttf';
import RobotoBlack from 'static/fonts/Roboto-Black.ttf';

export default css`
  @font-face {
    font-family: InterRegular;
    src: url(${InterRegular});
  }

  @font-face {
    font-family: PoppinsBold;
    src: url(${PoppinsBold});
  }

  @font-face {
    font-family: RobotoLight;
    src: url(${RobotoLight});
  }

  @font-face {
    font-family: RobotoThin;
    src: url(${RobotoThin});
  }

  @font-face {
    font-family: RobotoRegular;
    src: url(${RobotoRegular});
  }

  @font-face {
    font-family: RobotoMedium;
    src: url(${RobotoMedium});
  }

  @font-face {
    font-family: RobotoBold;
    src: url(${RobotoBold});
  }

  @font-face {
    font-family: RobotoBlack;
    src: url(${RobotoBlack});
  }
`;
