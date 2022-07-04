import { APP_NAME } from '@config';

const AppName: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => (
  <span className={`text-lg font-bold uppercase text-primary ${className}`} {...props}>
    {APP_NAME}
  </span>
);
export default AppName;
