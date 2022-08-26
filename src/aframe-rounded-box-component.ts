  declare const AFRAME:any, THREE:any

/**** (re)define a component for A-Frame ****/

  delete AFRAME.components['rounded-box']

  AFRAME.registerComponent('rounded-box', {
    schema: {
      'width':   { type:'number', default:1 },
      'height':  { type:'number', default:1 },
      'depth':   { type:'number', default:1 },
      'radius':  { type:'number', default:0.1 },
      'segments':{ type:'int',    default:3 }
    },

  /**** init ****/

    init: function (oldData:any):void {
      let Geometry = new THREE.BufferGeometry()
      let Material = new THREE.MeshStandardMaterial()
      let Mesh     = new THREE.Mesh(Geometry,Material)
      this.el.setObject3D('mesh', Mesh)
    },

  /**** update ****/

    update: function (oldData:any):void {
      let { width,height,depth, radius, segments} = this.data

      if (
        (oldData == null) ||
        (width !== oldData.width) || (height !== oldData.height) ||
        (depth !== oldData.depth) || (radius !== oldData.radius) ||
        (segments !== oldData.segments)
      ) {
        radius = Math.min(radius, width/2,height/2,depth/2)*0.9999

        let Shape = new THREE.Shape()
          Shape.absarc(radius,      radius,        radius, -Math.PI/2,-Math.PI, true)
          Shape.absarc(radius,      height-radius, radius, Math.PI,Math.PI/2,   true)
          Shape.absarc(width-radius,height-radius, radius, Math.PI/2,0,         true)
          Shape.absarc(width-radius,radius,        radius, 0,-Math.PI/2,        true)
        let Geometry = new THREE.ExtrudeBufferGeometry(Shape, {
          depth:depth-2*radius,
          bevelEnabled:true,
          bevelThickness:radius, bevelSize:radius, bevelOffset:-radius,
          bevelSegments:2*segments, curveSegments:segments
        })
          Geometry.center()
        this.el.getObject3D('mesh').geometry = Geometry
      }
    },

  /**** remove ****/

    remove: function ():void {
      this.el.removeObject3D('mesh')
    }
  })

/**** define a primitive for the "rounded-box" component (if not already present) ****/

  if (AFRAME.primitives.primitives['a-rounded-box'] == null) {
    AFRAME.registerPrimitive('a-rounded-box', {
      defaultComponents: {
        'rounded-box':{}
      },

      mappings: {
        width:   'rounded-box.width',
        height:  'rounded-box.height',
        depth:   'rounded-box.depth',
        radius:  'rounded-box.radius',
        segments:'rounded-box.segments',
      }
    })
  } else {
    console.warn('an A-Frame primitive called "a-rounded-box" exists already')
  }

