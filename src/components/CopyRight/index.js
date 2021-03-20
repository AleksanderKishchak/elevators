import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link target="_blank" color="inherit" href="https://github.com/AleksanderKishchak">
      The Creator
    </Link>
    {' '}
    {new Date().getFullYear()}
    .
  </Typography>
);
