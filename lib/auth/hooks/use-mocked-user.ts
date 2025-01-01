import { _mock } from 'lib/_mock';

// To get the user from the <AuthContext/>, you can use

// Change:
// import { useMockedUser } from 'lib/auth/hooks';
// const { user } = useMockedUser();

// To:
// import { useAuthContext } from 'lib/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Jaydon Frankie',
    email: 'demo@kimistores.com',
    photoURL: _mock.image.avatar(9),
    phoneNumber: _mock.phoneNumber(1),
    country: _mock.countryNames(1),
    address: '90210 Broadway Blvd',
    state: 'California',
    city: 'San Francisco',
    zipCode: '94116',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}