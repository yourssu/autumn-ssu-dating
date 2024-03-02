import Lottie from 'react-lottie'

import animationData from '../../../assets/loading.json'

export const ExploreLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Lottie options={defaultOptions} width={100} height={100} />
}
