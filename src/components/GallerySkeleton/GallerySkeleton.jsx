import ContentLoader from 'react-content-loader';

export const GallerySkeleton = () => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#c0c0c0"
  >
    <rect x="0" y="5" rx="2" ry="2" width="56" height="56" />
    <rect x="-21" y="201" rx="2" ry="2" width="419" height="22" />
    <rect x="63" y="4" rx="2" ry="2" width="56" height="56" />
    <rect x="128" y="4" rx="2" ry="2" width="56" height="56" />
    <rect x="190" y="3" rx="2" ry="2" width="56" height="56" />
    <rect x="255" y="4" rx="2" ry="2" width="56" height="56" />
    <rect x="317" y="5" rx="2" ry="2" width="56" height="56" />
    <rect x="-2" y="70" rx="2" ry="2" width="56" height="56" />
    <rect x="317" y="64" rx="2" ry="2" width="56" height="56" />
    <rect x="254" y="65" rx="2" ry="2" width="56" height="56" />
    <rect x="191" y="66" rx="2" ry="2" width="56" height="56" />
    <rect x="127" y="65" rx="2" ry="2" width="56" height="56" />
    <rect x="59" y="69" rx="2" ry="2" width="56" height="56" />
    <rect x="0" y="132" rx="2" ry="2" width="56" height="56" />
    <rect x="61" y="133" rx="2" ry="2" width="56" height="56" />
  </ContentLoader>
);
