# Parcel bug repro

Please ignore the F# files that generated the JS files

- Serving project locally works (`npm run start:parcel`)
- Building same project doesn't (`npm run build:parcel`)
- Building with `--no-scope-hoist` works (`npm run build:parcel:no-scope-hoist`)