# Condos  
[![npm version](https://badge.fury.io/js/condos.svg)](https://badge.fury.io/js/condos)
[![Known Vulnerabilities](https://snyk.io/test/github/stephenpoole/condos/badge.svg)](https://snyk.io/test/github/stephenpoole/condos)
[![Build Status](https://travis-ci.com/stephenpoole/condos.svg?token=qUi7ehLLw3vHe3SLFzbH&branch=master)](https://travis-ci.com/stephenpoole/condos)
[![codecov](https://codecov.io/gh/stephenpoole/condos/branch/master/graph/badge.svg?token=mOjWyZQkOk)](https://codecov.io/gh/stephenpoole/condos)  

*Condos* is a promise-based Node.js library for the Condos.ca api.

## Installation
Install `condos` and save to your `package.json` in one easy step.

With npm:
```
npm install condos --save
```

With yarn:
```
yarn add condos
```

## Documentation
You may find the *Condos* documentation [here](https://stephenpoole.github.io/condos).

## Usage
1) Import *Condos* into your application:
```
import Condos from 'condos';
```

2) Call an api method to request data:

With Promises:
```
import Condos, { Precision, Neighbourhood, GroupType, OfferType } from 'condos';

Condos.listings({
  precision: Precision.Narrow,
  neighbourhood: Neighbourhood.KingWest,
  groupBy: GroupType.Neighbourhood,
  offer: OfferType.Sale,
}).then(data => {
  console.log(data);
});
```

With async/await:
```
import Condos, { Precision, Neighbourhood, GroupType, OfferType } from 'condos';

(async () => {
  const data = await Condos.listings({
    precision: Precision.Narrow,
    neighbourhood: Neighbourhood.KingWest,
    groupBy: GroupType.Neighbourhood,
    offer: OfferType.Sale,
  });
  console.log(data);
})();
```
