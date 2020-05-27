import { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const OpenModal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;
const CloseModal = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(10%);
  }
`;
const headerSlideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const slideInTop = keyframes`
	0% {
		transform:translateY(-1000px);
		opacity:0
	}
	100% {
		transform:translateY(0);
		opacity:1
	}
`;
const slideOutTop = keyframes`
	0% {
		transform:translateY(0px);
		opacity:1
	}
	100% {
		transform:translateY(-1000);
		opacity:0
	}
`;
const slideInBottom = keyframes`
	0% {
		transform:translateY(1000px);
		opacity:0;
	}
	100% {
		transform:translateY(0);
		opacity:1;
	}
`;
const slideOutBottom = keyframes`
	0% {
		transform:translateY(0px);
		opacity:1
	}
	100% {
		transform:translateY(1000);
		opacity:0
	}
`;
const slideInRight = keyframes`
	0% {
		transform:translateX(125px);
		opacity:0;
	}
	100% {
		transform:translateX(0px);
		opacity:1;
	}
`;
const slideInLeft = keyframes`
	0% {
		transform:translateX(-125px);
		opacity:0;
	}
	100% {
		transform:translateX(0px);
		opacity:1;
	}
`;
const fadeOut = keyframes`
	0% {
		opacity:1;
	}
	100% {
		opacity:0;
	}
`;
const travel = keyframes`
	from { left: 0;     }
  to   { left: 240px; }
`;
const bounce = keyframes`
  from, to  {
    top: 0;
    animation-timing-function: ease-out;
  }
  50% {
    top: 200px;
    animation-timing-function: ease-in;
  }
	`;
const spin = keyframes`
	from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
	`;

export {
  OpenModal,
  CloseModal,
  headerSlideIn,
  slideInTop,
  slideInBottom,
  slideInRight,
  slideInLeft,
  slideOutTop,
  slideOutBottom,
  fadeOut,
  fadeIn,
  travel,
  bounce,
  spin,
};
