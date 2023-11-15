# 3D Webdev with Three.js


## Live Demo
<a href = "https://drewr.org/" target = "_blank"> My page </a>

## Usage (Run this in your terminal after installing Node.js)

```
git clone https://github.com/Livelyregards/3D_WebDev.git
npm install
npm run dev
```

## Carmichael Numbers
In order to instantiate the first `TorusKnotGeometry(radius: Float, tube: Float, tubularSegments: Integer, radialSegments: Integer, p: Integer, q: Integer)` constructor in the `main.js` file, the last two integers (p, and q) must be relatively prime with one another (Their GCD must equal 1). If you want to get a little fancier with this I highly encourage you to try replacing p,q with a Charmicheal number as this generates some really attractive-looking tori. To get you started try out the following pairs: (p = 1729,q = 2465),(p=2821, q=6601),(p =6601, q=8911), and you'll see this for yourself. For proof of why this works, you'll have to consult <a href = "https://en.wikipedia.org/wiki/Fermat_pseudoprime">Pierre de Fermat</a> and <a href ="https://en.wikipedia.org/wiki/Carmichael_number">Robert Carmichael</a>. But generally, like all good things in life, it is left as an exercise for the reader 🙂

## When you are ready to deploy make sure that you run the following

```
npm run build 

```
