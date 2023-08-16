declare module 'jwt-decode' {
    interface DecodedToken {
      id: number;
      user: string;
      role: string;
      iat: number;
      exp: number;
    }
  
    function jwt_decode(token: string): DecodedToken;
    
    export default jwt_decode;
  }