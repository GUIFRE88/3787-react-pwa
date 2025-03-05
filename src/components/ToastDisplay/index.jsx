import * as Styled from "./style";
import PropTypes from 'prop-types';

const ToastDisplay = ({notification}) => {
  return (
    <Styled.Container>
      <Styled.Title>{notification.title}</Styled.Title>
      <Styled.Body>{notification.body}</Styled.Body>
    </Styled.Container>
  )
}

ToastDisplay.propTypes = {
  notification: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default ToastDisplay;