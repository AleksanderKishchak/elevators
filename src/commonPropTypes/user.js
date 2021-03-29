import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    entrance: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
  }).isRequired,
  status: PropTypes.shape({
    isPaid: PropTypes.bool.isRequired,
  }).isRequired,
});
