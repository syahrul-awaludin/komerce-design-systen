export interface AvatarProps {
  size?: 'mini' | 'small' | 'regular' | 'large' | 'x-large';
  type?: 'image' | 'initials' | 'icon';
  src?: string;
  initials?: string;
  alt?: string;
  className?: string;
}
