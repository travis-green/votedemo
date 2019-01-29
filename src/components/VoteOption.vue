<template>
  <div class="option">
    <!-- <button @click="openConfirm" class="button is-primary">$modal.confirm</button> -->
    <div class="qs1item qsitem">
      <div class="title">
        <div class="text" style="widthL100%;">
          <!-- <img class="question" src="../assets/qs1.png"> -->
        </div>
      </div>
      <div class="votes">
        <div class="vote" v-for="vote in votes">{{ vote.voter }}</div>
      </div>
      <div class="action">
        <div v-if="alreadyvote">
          <button
            @click="voteded"
            :on-ok="okCb1"
            class="vote-btn"
            id="positivebtn"
            style="margin-right:1.8rem;"
          >
            <img class="checkimgone" v-if="totalcountone>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountone>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountone>0" src="../assets/check.png">
          </button>
          <button @click="voteded" class="vote-btn" id="negativebtn">
            <img class="checkimgone" v-if="totalcounttwo>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcounttwo>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcounttwo>0" src="../assets/check.png">
          </button>
        </div>
        <div v-else>
          <button
            @click="qs1voteposi"
            :on-ok="okCb1"
            class="vote-btn"
            id="positivebtn"
            style="margin-right:1.8rem;"
          >
            <img class="checkimgone" v-if="totalcountone>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountone>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountone>0" src="../assets/check.png">
          </button>
          <button @click="qs1votenega" :on-ok="okCb2" class="vote-btn" id="negativebtn">
            <img class="checkimgone" v-if="totalcounttwo>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcounttwo>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcounttwo>0" src="../assets/check.png">
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="qs2item qsitem">
      <div class="title">
        <div class="text" style="widthL100%;">
          <img class="question" src="../assets/qs2.png">
        </div>
      </div>
      <div class="votes">
        <div class="vote" v-for="vote in votes">{{ vote.voter }}</div>
      </div>
      <div class="action">
        <div v-if="alreadyvote">
          <button @click="voteded" class="vote-btn" id="positivebtn" style="margin-right:1.8rem;">
            <img class="checkimgone" v-if="totalcountthree>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountthree>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountthree>0" src="../assets/check.png">
          </button>
          <button @click="voteded" class="vote-btn" id="negativebtn">
            <img class="checkimgone" v-if="totalcountfour>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountfour>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountfour>0" src="../assets/check.png">
          </button>
        </div>
        <div v-else>
          <button
            @click="qs2voteposi"
            :on-ok="okCb3"
            class="vote-btn"
            id="positivebtn"
            style="margin-right:1.8rem;"
          >
            <img class="checkimgone" v-if="totalcountthree>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountthree>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountthree>0" src="../assets/check.png">
          </button>
          <button @click="qs2votenega" :on-ok="okCb4" class="vote-btn" id="negativebtn">
            <img class="checkimgone" v-if="totalcountfour>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountfour>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountfour>0" src="../assets/check.png">
          </button>
        </div>
      </div>
    </div>
    <div class="qs3item qsitem">
      <div class="title">
        <div class="text" style="widthL100%;">
          <img class="question" src="../assets/qs3.png">
        </div>
      </div>
      <div class="votes">
        <div class="vote" v-for="vote in votes">{{ vote.voter }}</div>
      </div>
      <div class="action">
        <div v-if="alreadyvote">
          <button
            @click="voteded"
            :on-ok="okCb3"
            class="vote-btn"
            id="positivebtn"
            style="margin-right:1.8rem;"
          >
            <img class="checkimgone" v-if="totalcountfive>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountfive>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountfive>0" src="../assets/check.png">
          </button>
          <button @click="voteded" :on-ok="okCb3" class="vote-btn" id="negativebtn">
            <img class="checkimgone" v-if="totalcountsix>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountsix>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountsix>0" src="../assets/check.png">
          </button>
        </div>
        <div v-else>
          <button
            @click="qs3voteposi"
            :on-ok="okCb5"
            class="vote-btn"
            id="positivebtn"
            style="margin-right:1.8rem;"
          >
            <img class="checkimgone" v-if="totalcountfive>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountfive>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountfive>0" src="../assets/check.png">
          </button>
          <button @click="qs3votenega" :on-ok="okCb6" class="vote-btn" id="negativebtn">
            <img class="checkimgone" v-if="totalcountsix>2" src="../assets/check.png">
            <img class="checkimgtwo" v-if="totalcountsix>1" src="../assets/check.png">
            <img class="checkimgthree" v-if="totalcountsix>0" src="../assets/check.png">
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Modal from "./Modal";
import axios from "axios";
import VueRouter from "vue-router";
// import utils from "/build/getparams";

export default {
  name: "vote-option",
  props: ["option", "allVotes"],
  components: {
    Modal
  },
  data() {
    return {
      selectcount: ["one", "two", "three"],
      alreadyvote: false,

      totalcountone: 0,
      totalcounttwo: 0,
      resseleccount: 2,
      totalcountthree: 0,
      totalcountfour: 0,
      totalcountfive: 0,
      totalcountsix: 0,

      qs1leftcheckone: false,
      qs1leftchecktwo: false,
      qs1leftcheckthree: false,
      qs1rightcheckone: false,
      qs1rightchecktwo: false,
      qs1rightcheckthree: false,

      qs2leftcheckone: false,
      qs2leftchecktwo: false,
      qs2leftcheckthree: false,
      qs2rightcheckone: false,
      qs2rightchecktwo: false,
      qs2rightcheckthree: false,

      qs3leftcheckone: false,
      qs3leftchecktwo: false,
      qs3leftcheckthree: false,
      qs3rightcheckone: false,
      qs3rightchecktwo: false,
      qs3rightcheckthree: false
    };
  },
  computed: {
    votes: function() {
      var self = this;
      setInterval(() => {
        axios
          .get("http://apiwx.p8games.com/switch")
          .then(function(res) {
            
            if (res.data.msg[0].switch == 0) {
              console.log('asdsa');
              self.alreadyvote = true;
            } else {
            }
            console.log(self.alreadyvote);
          })
          .catch(function(err) {
            console.log(err);
          });
        // var state = "close";
        // this.voteded(state);
        // this.alreadyvote = true;
      }, 1000);

      var self = this;
      var openid = this.getUrlKey("openid");
      axios
        .get("http://apiwx.p8games.com/checkinfo", {
          params: {
            openid: openid
          }
        })
        .then(function(res) {
          var uservote = res.data.msg;
          var result = JSON.parse(uservote);
          var selcount = result[0].selcount;
          // console.log(selcount);
          if (selcount == 3) {
            self.alreadyvote = true;
          } else if (selcount == 0) {
            console.log(self.resseleccount);
          } else if (selcount == 1) {
            self.resseleccount = 1;
          } else if (selcount == 2) {
            self.resseleccount = 0;
          }
          self.totalcountone = result[0].gpone;
          self.totalcounttwo = result[0].gptwo;
          self.totalcountthree = result[0].gpthree;
          self.totalcountfour = result[0].gpfour;
          self.totalcountfive = result[0].gpfive;
          self.totalcountsix = result[0].gpsix;
        })
        .catch(function(err) {
          console.log(err);
        });
      const allVotes = this.$store.state.vote.votes;
      return allVotes.filter(t => t.optionId == this.option.id);
    },
    voted: function() {
      return this.votes.filter(t => t.voter === this.currentUser).length;
    },
    currentUser: function() {
      return this.$store.state.auth.currentUser;
    }
  },
  methods: {
    getUrlKey: function(name) {
      return (
        decodeURIComponent(
          (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
            location.href
          ) || [, ""])[1].replace(/\+/g, "%20")
        ) || null
      );
    },
    voteded(state) {
      if (state == "close") {
        this.$notify.open({
          content: "投票通道已关闭",
          icon: "smile-o",
          closable: false,
          placement: "top-center",
          duration: 2000
        });
      } else if (state == "open") {
        this.$notify.open({
          content: "投票通道已开启",
          icon: "smile-o",
          placement: "top-center",
          duration: 2000
        });
      } else {
        this.$notify.open({
          content: "您已经投过票了",
          icon: "smile-o",
          placement: "top-center",
          duration: 2000
        });
      }
    },
    guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    placementNotify() {
      var self = this;
      this.$notify.open({
        content: "感谢支持,您还有" + self.resseleccount + "票",
        icon: "smile-o",
        placement: "top-center",
        duration: 2000
      });
    },
    postchoose: function(choose, groupnum) {
      var openid = this.getUrlKey("openid");
      var nickname = this.getUrlKey("nickName");
      var headimgurl = this.getUrlKey("headimgurl");
      axios
        .get("http://apiwx.p8games.com/vote", {
          params: {
            openid: math.random,
            nickname: nickname,
            headimgurl: headimgurl,
            select: choose,
            groupnum: groupnum
          }
        })
        .then(function(res) {})
        .catch(function(err) {});
    },
    gotselect: function(val) {
      var self = this;
      var firstselect = val.indexOf("one");
      var secondselect = val.indexOf("two");
      var thirdselect = val.indexOf("three");
      console.log(self.resseleccount);
      if (self.resseleccount == 0) {
        self.alreadyvote = true;
      }
      // if (val.length == 0) {
      //   self.alreadyvote = true;
      // }
      // switch (val.length) {
      //   case 1:
      //     val.splice(firstselect, 1);
      //     self.alreadyvote = true;
      //     break;
      //   case 2:
      //     val.splice(secondselect, 1);
      //     break;
      //   case 3:
      //     val.splice(thirdselect, 1);
      //   default:
      // }
      self.resseleccount = self.resseleccount - 1;
    },
    okCb1: function() {
      this.placementNotify();
      var self = this;
      var leftcount = this.selectcount;
      self.totalcountone = self.totalcountone + 1;
      self.postchoose(self.totalcountone, "groupone");
      switch (leftcount.length) {
        case 1:
          self.qs1leftcheckthree = true;
          break;
        case 2:
          self.qs1leftchecktwo = true;
          break;
        case 3:
          self.qs1leftcheckone = true;
        default:
      }
      this.gotselect(this.selectcount);
    },
    okCb2: function() {
      this.placementNotify();
      var self = this;
      self.totalcounttwo = self.totalcounttwo + 1;
      var leftcount = this.selectcount;
      self.postchoose(self.totalcounttwo, "grouptwo");

      switch (leftcount.length) {
        case 1:
          self.qs1rightcheckone = true;
          break;
        case 2:
          self.qs1rightchecktwo = true;
          break;
        case 3:
          self.qs1rightcheckthree = true;
        default:
      }
      this.gotselect(this.selectcount);
    },
    okCb3: function() {
      this.placementNotify();
      var self = this;
      self.totalcountthree = self.totalcountthree + 1;
      var leftcount = this.selectcount;
      self.postchoose(self.totalcountthree, "groupthree");

      switch (leftcount.length) {
        case 1:
          self.qs2leftcheckone = true;
          break;
        case 2:
          self.qs2leftchecktwo = true;
          break;
        case 3:
          self.qs2leftcheckthree = true;
        default:
      }
      this.gotselect(this.selectcount);
    },
    okCb4: function() {
      this.placementNotify();
      var self = this;
      self.totalcountfour = self.totalcountfour + 1;
      var leftcount = this.selectcount;
      self.postchoose(self.totalcountfour, "groupfour");

      switch (leftcount.length) {
        case 1:
          self.qs2rightcheckone = true;
          break;
        case 2:
          self.qs2rightchecktwo = true;
          break;
        case 3:
          self.qs2rightcheckthree = true;
        default:
      }
      this.gotselect(this.selectcount);
    },
    okCb5: function() {
      this.placementNotify();
      var self = this;
      self.totalcountfive = self.totalcountfive + 1;
      var leftcount = this.selectcount;
      self.postchoose(self.totalcountfive, "groupfive");

      switch (leftcount.length) {
        case 1:
          self.qs3leftcheckone = true;
          break;
        case 2:
          self.qs3leftchecktwo = true;
          break;
        case 3:
          self.qs3leftcheckthree = true;
        default:
      }
      this.gotselect(this.selectcount);
    },
    okCb6: function() {
      this.placementNotify();
      var self = this;
      self.totalcountsix = self.totalcountsix + 1;
      var leftcount = this.selectcount;
      self.postchoose(self.totalcountsix, "groupsix");

      switch (leftcount.length) {
        case 1:
          self.qs3rightcheckone = true;
          break;
        case 2:
          self.qs3rightchecktwo = true;
          break;
        case 3:
          self.qs3rightcheckthree = true;
        default:
      }
      this.gotselect(this.selectcount);
    },

    qs1voteposi: function() {
      this.$modal.confirm({
        content: "为该组投票?",
        onOk: this.okCb1
      });
    },
    qs1votenega: function() {
      this.$modal.confirm({
        content: "为该组投票?",
        onOk: this.okCb2
      });
    },
    qs2voteposi: function() {
      this.$modal.confirm({
        content: "为该组投票?",
        onOk: this.okCb3
      });
    },
    qs2votenega: function() {
      this.$modal.confirm({
        content: "为该组投票?",
        onOk: this.okCb4
      });
    },
    qs3voteposi: function() {
      this.$modal.confirm({
        content: "为该组投票?",
        onOk: this.okCb5
      });
    },
    qs3votenega: function() {
      this.$modal.confirm({
        content: "为该组投票?",
        onOk: this.okCb6
      });
    },
    undo: function() {
      const vote = this.votes.find(t => t.voter === this.currentUser);
      console.log("undo", vote.id);
      this.$store.dispatch({
        type: "undo",
        voteId: vote.id
      });
    },
    voteup: function() {
      console.log("111");
      if (this.voted || !this.currentUser) return;
      let vote = {
        voter: this.currentUser,
        optionId: this.option.id
      };
      this.$store.dispatch({
        type: "voteup",
        vote
      });
    }
  }
};
</script>

<style scoped>
.checkimgone {
  display: inline;
  z-index: 666;
  width: 2.2rem;
  margin-left: -3rem;
  position: absolute;
}

.checkimgtwo {
  display: inline;
  z-index: 666;
  width: 2.2rem;
  margin-left: -1rem;
  position: absolute;
}
.checkimgthree {
  display: inline;
  z-index: 666;
  width: 2.2rem;
  margin-left: 1rem;
  position: absolute;
}
.qsitem {
  margin-bottom: 1rem;
}
.option {
  /* background-color: #fff; */
  /* box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8); */
  font-size: 20px;
  text-align: center;
  line-height: 1.8;
  /* padding: 10px; */
  /* margin-top: 15px; */
  display: flex;
  flex-direction: column;
}
#positivebtn {
  background-image: url("../assets/positivebtn.png");
  background-size: cover;
}
#negativebtn {
  background-image: url("../assets/negativebtn.png");
  background-size: cover;
}
.option .title {
  display: flex;
  justify-content: space-around;
}
.option .title .text {
  flex-shrink: 1;
  margin: 0;
  font-size: 18px;
  /* border: 2px solid #00bcd4;
  color: #00bcd4; */
  display: inline-block;
  padding: 3px 15px;
}
.question {
  margin: 0;
  width: 100%;
  background-size: cover;
}

.action {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
/* .votes {
  margin-top: 10px;
  text-align: left;
} */
.vote {
  display: inline-block;
  background-color: #000;
  color: #fff;
  padding: 2px;
  margin-right: 5px;
  font-size: 14px;
}
button.vote-btn {
  width: 8.1875rem;
  background-size: cover;
  height: 3.1875rem;
  padding: 0.3125rem;
  font-size: 20px;
  padding: 6px 22px;
}
button.vote-btn.voted {
  /* background-color: #7dd222; */
}
</style>
