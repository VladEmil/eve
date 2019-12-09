<template>
  <div class="p-3 row justify-content-center">
    <div class="col-6">
      <div id="menu">
        <div class="row">
          <div class="col-3">
            <button class="btn btn-primary" @click="routeHome">Ores to minerals</button>
          </div>
        </div>
      </div>

      <div id="body" class="row">
        <div class="col-12 my-3">
          Adds all ore fields and shows total reprocessed minerals.
          Helps setting up contracts for all kinds of ores to obtain an aprox value of minerals.
        </div>
        
        <div class="row col-12 align-items-center mb-5">
          <div class="col-3">Reprocess efficiency percent * (example: 71.1)</div>
          <div class="col-2">
            <input id="2" v-model="reprocessPercent" type="text" class="form-control"/>
          </div>
          <div class="col-1">
            %
          </div>
        </div>
        <div class="form col-6">
          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="1">Flawless Arkonor</label></div>
            <div class="col-5">
              <input id="1" v-model="arkonor" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="2">Brilliant Gneiss</label></div>
            <div class="col-5">
              <input id="2" v-model="gneiss" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="3">Pellucid Crokite</label></div>
            <div class="col-5">
              <input id="3" v-model="crokite" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="4">Lustrous Hedbergite</label></div>
            <div class="col-5">
              <input id="4" v-model="hedbergite" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="5">Scintillating Hemorphite</label></div>
            <div class="col-5">
              <input id="5" v-model="hemorphite" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="6">Stable Veldspar</label></div>
            <div class="col-5">
              <input id="6" v-model="veldspar" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="7">Platinoid omber</label></div>
            <div class="col-5">
              <input id="7" v-model="omber" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="8">Cubic bistot</label></div>
            <div class="col-5">
              <input id="8" v-model="bistot" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="9">Immaculate Jaspet</label></div>
            <div class="col-5">
              <input id="9" v-model="jaspet" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="10">Opulent Pyroxeres</label></div>
            <div class="col-5">
              <input id="10" v-model="pyroxeres" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="11">Dazzling Spodumain</label></div>
            <div class="col-5">
              <input id="11" v-model="spodumain" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="12">Resplendant Kernite</label></div>
            <div class="col-5">
              <input id="12" v-model="kernite" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="13">Sparkling Plagioclase</label></div>
            <div class="col-5">
              <input id="13" v-model="plagioclase" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="14">Jet Ochre</label></div>
            <div class="col-5">
              <input id="14" v-model="ochre" type="text" class="form-control"/>
            </div>
          </div>

          <div class="row align-items-center mb-1">
            <div class="col-5"><label for="15">Glossy Scordite</label></div>
            <div class="col-5">
              <input id="15" v-model="scordite" type="text" class="form-control"/>
            </div>
          </div>
        </div>

        <div class="result col-6 mt-4">
          <div class="row mb-1">
            <div class="col-2">
              Tritanium
            </div>
            <div class="col-2">
              {{tritanium}}
            </div>
          </div>

          <div class="row mb-1">
            <div class="col-2">
              Pyerite
            </div>
            <div class="col-2">
              {{pyerite}}
            </div>
          </div>

          <div class="row mb-1">
            <div class="col-2">
              Mexallon
            </div>
            <div class="col-2">
              {{mexallon}}
            </div>
          </div>

          <div class="row mb-1">
            <div class="col-2">
              Isogen
            </div>
            <div class="col-2">
              {{isogen}}
            </div>
          </div>

          <div class="row mb-1">
            <div class="col-2">
              Nocxium
            </div>
            <div class="col-2">
              {{nocxium}}
            </div>
          </div>

          <div class="row mb-1">
            <div class="col-2">
              Zydrine
            </div>
            <div class="col-2">
              {{zydrine}}
            </div>
          </div>

          <div class="row mb-1">
            <div class="col-2">
              Megacyte
            </div>
            <div class="col-2">
              {{megacyte}}
            </div>
          </div>
        </div>
      </div>      
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      reprocessPercent: null,
      arkonor: null,
      gneiss: null,
      crokite: null,
      hedbergite: null,
      hemorphite: null,
      veldspar: null,
      omber: null,
      bistot: null,
      jaspet: null,
      pyroxeres: null,
      spodumain: null,
      kernite: null,
      plagioclase: null,
      ochre: null,
      scordite: null
    }
  },
  computed: {
    tritanium() {
      let arkonor = parseInt(Math.floor(+this.arkonor / 100) * 25300 * (this.reprocessPercent / 100))
      let crokite = parseInt(Math.floor(+this.crokite / 100) * 24150 * (this.reprocessPercent / 100))
      let hemorphite = parseInt(Math.floor(+this.hemorphite / 100) * 2530 * (this.reprocessPercent / 100))
      let veldspar = parseInt(Math.floor(+this.veldspar / 100) * 477 * (this.reprocessPercent / 100))
      let omber = parseInt(Math.floor(+this.omber / 100) * 920 * (this.reprocessPercent / 100))
      let pyroxeres = parseInt(Math.floor(+this.pyroxeres / 100) * 404 * (this.reprocessPercent / 100))
      let spodumain = parseInt(Math.floor(+this.spodumain / 100) * 64400 * (this.reprocessPercent / 100))
      let kernite = parseInt(Math.floor(+this.kernite / 100) * 154 * (this.reprocessPercent / 100))
      let plagioclase = parseInt(Math.floor(+this.plagioclase / 100) * 123 * (this.reprocessPercent / 100))
      let ochre = parseInt(Math.floor(+this.ochre / 100) * 11500 * (this.reprocessPercent / 100))
      let scordite = parseInt(Math.floor(+this.scordite / 100) * 398 * (this.reprocessPercent / 100))

      let tritanium = arkonor + crokite + hemorphite + veldspar + omber + pyroxeres + spodumain + kernite + plagioclase + ochre + scordite
      return tritanium
    },

    pyerite() {
      let gneiss = parseInt(Math.floor(+this.gneiss / 100) * 2530 * (this.reprocessPercent / 100))
      let hedbergite = parseInt(Math.floor(+this.hedbergite / 100) * 1150 * (this.reprocessPercent / 100))
      let omber = parseInt(Math.floor(+this.omber / 100) * 115 * (this.reprocessPercent / 100))
      let bistot = parseInt(Math.floor(+this.bistot / 100) * 13800 * (this.reprocessPercent / 100))
      let pyroxeres = parseInt(Math.floor(+this.pyroxeres / 100) * 29 * (this.reprocessPercent / 100))
      let spodumain = parseInt(Math.floor(+this.spodumain / 100) * 13859 * (this.reprocessPercent / 100))
      let plagioclase = parseInt(Math.floor(+this.plagioclase / 100) * 245 * (this.reprocessPercent / 100))
      let scordite = parseInt(Math.floor(+this.scordite / 100) * 199 * (this.reprocessPercent / 100))

      let pyerite = gneiss + hedbergite + omber + bistot + pyroxeres + spodumain + plagioclase + scordite
      return pyerite
    },

    mexallon() {
      let arkonor = parseInt(Math.floor(+this.arkonor / 100) * 2875 * (this.reprocessPercent / 100))
      let gneiss = parseInt(Math.floor(+this.gneiss / 100) * 2760 * (this.reprocessPercent / 100))
      let jaspet = parseInt(Math.floor(+this.jaspet / 100) * 403 * (this.reprocessPercent / 100))
      let pyroxeres = parseInt(Math.floor(+this.pyroxeres / 100) * 58 * (this.reprocessPercent / 100))
      let spodumain = parseInt(Math.floor(+this.spodumain / 100) * 2415 * (this.reprocessPercent / 100))
      let kernite = parseInt(Math.floor(+this.kernite / 100) * 307 * (this.reprocessPercent / 100))
      let plagioclase = parseInt(Math.floor(+this.plagioclase / 100) * 123 * (this.reprocessPercent / 100))

      let mexallon = gneiss + arkonor + jaspet + pyroxeres + spodumain + kernite + plagioclase
      return mexallon
    },

    isogen() {
      let gneiss = parseInt(Math.floor(+this.gneiss / 100) * 345 * (this.reprocessPercent / 100))
      let hedbergite = parseInt(Math.floor(+this.hedbergite / 100) * 230 * (this.reprocessPercent / 100))
      let hemorphite = parseInt(Math.floor(+this.hemorphite / 100) * 115 * (this.reprocessPercent / 100))
      let omber = parseInt(Math.floor(+this.omber / 100) * 98 * (this.reprocessPercent / 100))
      let spodumain = parseInt(Math.floor(+this.spodumain / 100) * 518 * (this.reprocessPercent / 100))
      let kernite = parseInt(Math.floor(+this.kernite / 100) * 154 * (this.reprocessPercent / 100))
      let ochre = parseInt(Math.floor(+this.ochre / 100) * 1840 * (this.reprocessPercent / 100))

      let isogen = gneiss + hedbergite + hemorphite + omber + spodumain + kernite + ochre
      return isogen
    },

    nocxium() {
      let hedbergite = parseInt(Math.floor(+this.hedbergite / 100) * 115 * (this.reprocessPercent / 100))
      let hemorphite = parseInt(Math.floor(+this.hemorphite / 100) * 138 * (this.reprocessPercent / 100))
      let jaspet = parseInt(Math.floor(+this.jaspet / 100) * 86 * (this.reprocessPercent / 100))
      let pyroxeres = parseInt(Math.floor(+this.pyroxeres / 100) * 6 * (this.reprocessPercent / 100))
      let ochre = parseInt(Math.floor(+this.ochre / 100) * 138 * (this.reprocessPercent / 100))

      let nocxium = hedbergite + hemorphite + jaspet + pyroxeres + ochre
      return nocxium
    },

    zydrine() {
      let hedbergite = parseInt(Math.floor(+this.hedbergite / 100) * 115 * (this.reprocessPercent / 100))
      let hemorphite = parseInt(Math.floor(+this.hemorphite / 100) * 17 * (this.reprocessPercent / 100))
      let bistot = parseInt(Math.floor(+this.bistot / 100) * 518 * (this.reprocessPercent / 100))
      let jaspet = parseInt(Math.floor(+this.jaspet / 100) * 9 * (this.reprocessPercent / 100))
      let zydrine = hedbergite + hemorphite + bistot + jaspet
      return zydrine
    },

    megacyte() {
      let arkonor = parseInt(Math.floor(+this.arkonor / 100) * 368 * (this.reprocessPercent / 100))
      let bistot = parseInt(Math.floor(+this.bistot / 100) * 115 * (this.reprocessPercent / 100))
      let megacyte = arkonor + bistot
      return megacyte
    }

  },
  methods: {
    routeHome() {
      this.$router.push('/')
    }
  }
}
</script>