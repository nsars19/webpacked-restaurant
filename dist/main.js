(()=>{"use strict";class e{constructor(e,t="div"){this.elem=document.createElement(t),this.addAttributes(e)}addAttributes(e){for(let t in e)this.elem.setAttribute(t,e[t])}setText(e){this.elem.innerText=e}}const t=(e,t)=>e.appendChild(t),n=e=>document.querySelector(e),s=()=>{const s=n("#content"),a=new e({class:"header d-grid"},"header"),l=new e({class:"info d-grid pi-c"},"div"),i=new e({class:"info-name"},"h1");i.setText("Bean's Burrito Grille");const o=new e({class:"info-tagline"},"h3");o.setText("Our burritos are as big as babies!");const c=new e({class:"main-container"},"div"),r=new e({class:"main-menu"},"nav"),m=new e({class:"home","data-active":!0},"span"),d=new e({class:"menu","data-active":!1},"span"),h=new e({class:"contact","data-active":!1},"span");m.setText("Home"),d.setText("Menu"),h.setText("Contact");const u=new e({class:"about"},"h1"),w=new e({class:"blurb"},"div");return u.setText("About"),w.setText("A staple in the region since 1984, Bean's burritos is the place to get your fill of south-of-the-border, north-of-the-border. Nothing quite says 'olé' like a Bean's burrito!\n\nBean's burritos was opened in 1984 by Bobby 'Beans' Sacamacci. He spent much of his life looking for the best burritos he could find, and was left, well, unfulfilled. He figured he could do better than the competition, and we're inclined to agree!"),{defaultView:()=>{[[s,a.elem],[s,r.elem],[s,c.elem],[a.elem,l.elem],[l.elem,i.elem],[l.elem,o.elem],[r.elem,m.elem],[r.elem,d.elem],[r.elem,h.elem],[c.elem,u.elem],[c.elem,w.elem]].forEach((e=>t(e[0],e[1])))},homeView:()=>{[[c.elem,u.elem],[c.elem,w.elem]].forEach((e=>t(e[0],e[1])))}}},a=()=>{const s=n(".main-container"),a=new e({class:"contacts"},"div"),l=new e({class:"phone-container"},"div"),i=new e({class:"phone-header"},"h2"),o=new e({class:"phone-number"},"div");i.setText("phone"),o.setText("1-344-123-6789");const c=new e({class:"address-container"},"div"),r=new e({class:"address-header"},"h2"),m=new e({class:"address"},"div");r.setText("address"),m.setText("285 Boulevard Rd");const d=new e({class:"hours-container"},"div"),h=new e({class:"hours-header"},"h2"),u=new e({class:"hours"},"div");h.setText("hours"),u.setText("Tues - Thu\n 10a - 11p\nFri - Sun\n10a - 1a"),[[s,a.elem],[a.elem,l.elem],[l.elem,i.elem],[l.elem,o.elem],[a.elem,c.elem],[c.elem,r.elem],[c.elem,m.elem],[a.elem,d.elem],[d.elem,h.elem],[d.elem,u.elem]].forEach((e=>t(e[0],e[1])))};!function(){const e=s();e.defaultView();const t=e=>document.querySelector(e),n=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},l=e=>e.setAttribute("data-active",!0),i={home:t(".home"),menu:t(".menu"),contact:t(".contact")},o=()=>{for(let e in i)i[e].setAttribute("data-active",!1)};t(".home").addEventListener("click",(()=>{o(),n(t(".main-container")),e.homeView(),l(i.home)})),t(".contact").addEventListener("click",(()=>{o(),n(t(".main-container")),a(),l(i.contact)})),t(".menu").addEventListener("click",(()=>{o(),n(t(".main-container")),l(i.menu)}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiYXR0cnMiLCJ0YWciLCJ0aGlzIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFkZEF0dHJpYnV0ZXMiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwidGV4dCIsImlubmVyVGV4dCIsImFwcGVuZFRvIiwicGFyZW50IiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsIiQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImhlYWRlciIsImNsYXNzIiwicmVzdGF1cmFudEluZm9Db250YWluZXIiLCJoMU5hbWUiLCJzZXRUZXh0IiwiaDNUYWdsaW5lIiwibWFpbkNvbnRhaW5lciIsIm1haW5NZW51IiwibWVudUhvbWUiLCJtZW51TWVudSIsIm1lbnVDb250YWN0IiwibWFpbkFib3V0IiwibWFpbkJsdXJiIiwiZGVmYXVsdFZpZXciLCJmb3JFYWNoIiwicGFpciIsImhvbWVWaWV3IiwiY29udGFjdFBhZ2UiLCJjb250YWluZXIiLCJjb250YWN0Q29udGFpbmVyIiwicGhvbmVOdW1iZXJDb250YWluZXIiLCJwaG9uZUhlYWRlciIsInBob25lTnVtYmVyIiwiYWRkcmVzc0NvbnRhaW5lciIsImFkZHJlc3NIZWFkZXIiLCJhZGRyZXNzIiwiaG91cnNDb250YWluZXIiLCJob3Vyc0hlYWRlciIsImhvdXJzIiwiaG9tZSIsImNsZWFyQ29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYWRkQWN0aXZlU3RhdHVzIiwibWVudUl0ZW1zIiwibWVudSIsImNvbnRhY3QiLCJjbGVhck1lbnVJdGVtc0FjdGl2ZVN0YXR1cyIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiJdLCJtYXBwaW5ncyI6Im1CQUFPLE1BQU1BLEVBQ1gsWUFBWUMsRUFBT0MsRUFBTSxPQUN2QkMsS0FBS0MsS0FBT0MsU0FBU0MsY0FBY0osR0FDbkNDLEtBQUtJLGNBQWNOLEdBR3JCLGNBQWNBLEdBQ1osSUFBSyxJQUFJTyxLQUFRUCxFQUNmRSxLQUFLQyxLQUFLSyxhQUFhRCxFQUFNUCxFQUFNTyxJQUl2QyxRQUFRRSxHQUNOUCxLQUFLQyxLQUFLTyxVQUFZRCxHQUkxQixNQUFNRSxFQUFXLENBQUNDLEVBQVFDLElBQVVELEVBQU9FLFlBQVlELEdBQ2pERSxFQUFJWixHQUFRQyxTQUFTWSxjQUFjYixHQzJEekMsRUEzRWlCLEtBQ2YsTUFBTWMsRUFBVUYsRUFBRSxZQUdaRyxFQUFTLElBQUluQixFQUFRLENBQ3pCb0IsTUFBTyxpQkFDTixVQUVHQyxFQUEwQixJQUFJckIsRUFBUSxDQUMxQ29CLE1BQU8sb0JBQ04sT0FFR0UsRUFBUyxJQUFJdEIsRUFBUSxDQUN6Qm9CLE1BQU8sYUFDTixNQUNIRSxFQUFPQyxRQUFRLHlCQUVmLE1BQU1DLEVBQVksSUFBSXhCLEVBQVEsQ0FDNUJvQixNQUFPLGdCQUNOLE1BQ0hJLEVBQVVELFFBQVEsc0NBR2xCLE1BQU1FLEVBQWdCLElBQUl6QixFQUFRLENBQUNvQixNQUFPLGtCQUFvQixPQUd4RE0sRUFBVyxJQUFJMUIsRUFBUSxDQUFDb0IsTUFBTyxhQUFjLE9BQzdDTyxFQUFXLElBQUkzQixFQUFRLENBQUNvQixNQUFPLE9BQVEsZUFBZSxHQUFPLFFBQzdEUSxFQUFXLElBQUk1QixFQUFRLENBQUNvQixNQUFPLE9BQVEsZUFBZSxHQUFRLFFBQzlEUyxFQUFjLElBQUk3QixFQUFRLENBQUNvQixNQUFPLFVBQVcsZUFBZSxHQUFRLFFBRTFFTyxFQUFTSixRQUFRLFFBQ2pCSyxFQUFTTCxRQUFRLFFBQ2pCTSxFQUFZTixRQUFRLFdBR3BCLE1BQU1PLEVB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R0FBUUEsRUFBS0ssYUFBYSxlQUFlLEdBRTNENEMsRUFBWSxDQUNoQkwsS0FBU2hDLEVBQUUsU0FDWHNDLEtBQVN0QyxFQUFFLFNBQ1h1QyxRQUFTdkMsRUFBRSxhQUdQd0MsRUFBNkIsS0FDakMsSUFBSyxJQUFJQyxLQUFRSixFQUNHQSxFQUFVSSxHQVhPaEQsYUFBYSxlQUFlLElBZW5FTyxFQUFFLFNBQVMwQyxpQkFBaUIsU0FBUyxLQUNuQ0YsSUFDQVAsRUFBZWpDLEVBQUUsb0JBQ2pCZ0MsRUFBS2IsV0FDTGlCLEVBQWdCQyxFQUFVTCxTQUc1QmhDLEVBQUUsWUFBWTBDLGlCQUFpQixTQUFTLEtBQ3RDRixJQUNBUCxFQUFlakMsRUFBRSxvQkFDakJvQixJQUNBZ0IsRUFBZ0JDLEVBQVVFLFlBRzVCdkMsRUFBRSxTQUFTMEMsaUJBQWlCLFNBQVMsS0FDbkNGLElBQ0FQLEVBQWVqQyxFQUFFLG9CQUVqQm9DLEVBQWdCQyxFQUFVQyxTQUk5QkssSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihhdHRycywgdGFnID0gJ2RpdicpIHtcbiAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcbiAgICB0aGlzLmFkZEF0dHJpYnV0ZXMoYXR0cnMpXG4gIH1cblxuICBhZGRBdHRyaWJ1dGVzKGF0dHJzKSB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiBhdHRycykge1xuICAgICAgdGhpcy5lbGVtLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyc1thdHRyXSlcbiAgICB9XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICB0aGlzLmVsZW0uaW5uZXJUZXh0ID0gdGV4dFxuICB9XG59XG5cbmNvbnN0IGFwcGVuZFRvID0gKHBhcmVudCwgY2hpbGQpID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZClcbmNvbnN0ICQgPSBlbGVtID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSlcblxuZXhwb3J0IHsgYXBwZW5kVG8sICQgfSIsImltcG9ydCB7IEVsZW1lbnQsIGFwcGVuZFRvLCAkIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gJChcIiNjb250ZW50XCIpXG5cbiAgLy8gSGVhZGVyICYgaGVhZGVyIGNoaWxkcmVuXG4gIGNvbnN0IGhlYWRlciA9IG5ldyBFbGVtZW50KHtcbiAgICBjbGFzczogJ2hlYWRlciBkLWdyaWQnXG4gIH0sICdoZWFkZXInKVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRJbmZvQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoe1xuICAgIGNsYXNzOiAnaW5mbyBkLWdyaWQgcGktYydcbiAgfSwgJ2RpdicpXG5cbiAgY29uc3QgaDFOYW1lID0gbmV3IEVsZW1lbnQoe1xuICAgIGNsYXNzOiAnaW5mby1uYW1lJ1xuICB9LCAnaDEnKVxuICBoMU5hbWUuc2V0VGV4dChcIkJlYW4ncyBCdXJyaXRvIEdyaWxsZVwiKVxuXG4gIGNvbnN0IGgzVGFnbGluZSA9IG5ldyBFbGVtZW50KHtcbiAgICBjbGFzczogJ2luZm8tdGFnbGluZSdcbiAgfSwgJ2gzJylcbiAgaDNUYWdsaW5lLnNldFRleHQoXCJPdXIgYnVycml0b3MgYXJlIGFzIGJpZyBhcyBiYWJpZXMhXCIpXG5cbiAgLy8gQm9keSBDb250YWluZXJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IG5ldyBFbGVtZW50KHtjbGFzczogJ21haW4tY29udGFpbmVyJyB9LCAnZGl2JylcblxuICAvLyBNZW51ICYgTWVudSBJdGVtc1xuICBjb25zdCBtYWluTWVudSA9IG5ldyBFbGVtZW50KHtjbGFzczogJ21haW4tbWVudSd9LCAnbmF2JylcbiAgY29uc3QgbWVudUhvbWUgPSBuZXcgRWxlbWVudCh7Y2xhc3M6ICdob21lJywgXCJkYXRhLWFjdGl2ZVwiOiB0cnVlfSwgJ3NwYW4nKVxuICBjb25zdCBtZW51TWVudSA9IG5ldyBFbGVtZW50KHtjbGFzczogJ21lbnUnLCBcImRhdGEtYWN0aXZlXCI6IGZhbHNlfSwgJ3NwYW4nKVxuICBjb25zdCBtZW51Q29udGFjdCA9IG5ldyBFbGVtZW50KHtjbGFzczogJ2NvbnRhY3QnLCBcImRhdGEtYWN0aXZlXCI6IGZhbHNlfSwgJ3NwYW4nKVxuXG4gIG1lbnVIb21lLnNldFRleHQoXCJIb21lXCIpXG4gIG1lbnVNZW51LnNldFRleHQoXCJNZW51XCIpXG4gIG1lbnVDb250YWN0LnNldFRleHQoXCJDb250YWN0XCIpXG5cbiAgLy8gQm9keSBDb250YWluZXIgSXRlbXNcbiAgY29uc3QgbWFpbkFib3V0ID0gbmV3IEVsZW1lbnQoe2NsYXNzOiAnYWJvdXQnfSwgJ2gxJylcbiAgY29uc3QgbWFpbkJsdXJiID0gbmV3IEVsZW1lbnQoe2NsYXNzOiAnYmx1cmInfSwgJ2RpdicpXG5cbiAgbWFpbkFib3V0LnNldFRleHQoXCJBYm91dFwiKVxuICBtYWluQmx1cmIuc2V0VGV4dChcIkEgc3RhcGxlIGluIHRoZSByZWdpb24gc2luY2UgMTk4NCwgQmVhbidzIGJ1cnJpdG9zIGlzIHRoZSBwbGFjZSB0byBnZXQgeW91ciBmaWxsIG9mIHNvdXRoLW9mLXRoZS1ib3JkZXIsIG5vcnRoLW9mLXRoZS1ib3JkZXIuIE5vdGhpbmcgcXVpdGUgc2F5cyAnb2zDqScgbGlrZSBhIEJlYW4ncyBidXJyaXRvIVxcblxcbkJlYW4ncyBidXJyaXRvcyB3YXMgb3BlbmVkIGluIDE5ODQgYnkgQm9iYnkgJ0JlYW5zJyBTYWNhbWFjY2kuIEhlIHNwZW50IG11Y2ggb2YgaGlzIGxpZmUgbG9va2luZyBmb3IgdGhlIGJlc3QgYnVycml0b3MgaGUgY291bGQgZmluZCwgYW5kIHdhcyBsZWZ0LCB3ZWxsLCB1bmZ1bGZpbGxlZC4gSGUgZmlndXJlZCBoZSBjb3VsZCBkbyBiZXR0ZXIgdGhhbiB0aGUgY29tcGV0aXRpb24sIGFuZCB3ZSdyZSBpbmNsaW5lZCB0byBhZ3JlZSFcIilcblxuICBjb25zdCBkZWZhdWx0VmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBsYXlvdXQgPSBbXG4gICAgICBbY29udGVudCwgaGVhZGVyLmVsZW1dLCBcbiAgICAgIFtjb250ZW50LCBtYWluTWVudS5lbGVtXSxcbiAgICAgIFtjb250ZW50LCBtYWluQ29udGFpbmVyLmVsZW1dLFxuICAgICAgW2hlYWRlci5lbGVtLCByZXN0YXVyYW50SW5mb0NvbnRhaW5lci5lbGVtXSxcbiAgICAgIFtyZXN0YXVyYW50SW5mb0NvbnRhaW5lci5lbGVtLCBoMU5hbWUuZWxlbV0sXG4gICAgICBbcmVzdGF1cmFudEluZm9Db250YWluZXIuZWxlbSwgaDNUYWdsaW5lLmVsZW1dLFxuICAgICAgW21haW5NZW51LmVsZW0sIG1lbnVIb21lLmVsZW1dLFxuICAgICAgW21haW5NZW51LmVsZW0sIG1lbnVNZW51LmVsZW1dLFxuICAgICAgW21haW5NZW51LmVsZW0sIG1lbnVDb250YWN0LmVsZW1dLFxuICAgICAgW21haW5Db250YWluZXIuZWxlbSwgbWFpbkFib3V0LmVsZW1dLFxuICAgICAgW21haW5Db250YWluZXIuZWxlbSwgbWFpbkJsdXJiLmVsZW1dLFxuICAgIF1cblxuICAgIGxheW91dC5mb3JFYWNoKHBhaXIgPT4gYXBwZW5kVG8ocGFpclswXSwgcGFpclsxXSkpXG4gIH1cblxuICBjb25zdCBob21lVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBsYXlvdXQgPSBbXG4gICAgICBbbWFpbkNvbnRhaW5lci5lbGVtLCBtYWluQWJvdXQuZWxlbV0sXG4gICAgICBbbWFpbkNvbnRhaW5lci5lbGVtLCBtYWluQmx1cmIuZWxlbV0sICBcbiAgICBdXG5cbiAgICBsYXlvdXQuZm9yRWFjaChwYWlyID0+IGFwcGVuZFRvKHBhaXJbMF0sIHBhaXJbMV0pKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0VmlldyxcbiAgICBob21lVmlldyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZSAiLCJpbXBvcnQgeyBFbGVtZW50LCBhcHBlbmRUbywgJCB9IGZyb20gJy4vZWxlbWVudHMnXG5cbmV4cG9ydCBjb25zdCBjb250YWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gJChcIi5tYWluLWNvbnRhaW5lclwiKVxuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gbmV3IEVsZW1lbnQoe2NsYXNzOiAnY29udGFjdHMnfSwgJ2RpdicpXG4gIC8vIENvbnRhY3QgaW5mb1xuICAvLyAtLSB0ZWxlcGhvbmUgXG4gIGNvbnN0IHBob25lTnVtYmVyQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoe2NsYXNzOiAncGhvbmUtY29udGFpbmVyJ30sICdkaXYnKVxuICBjb25zdCBwaG9uZUhlYWRlciA9IG5ldyBFbGVtZW50KHtjbGFzczogJ3Bob25lLWhlYWRlcid9LCAnaDInKVxuICBjb25zdCBwaG9uZU51bWJlciA9IG5ldyBFbGVtZW50KHtjbGFzczogJ3Bob25lLW51bWJlcid9LCAnZGl2JylcblxuICBwaG9uZUhlYWRlci5zZXRUZXh0KFwicGhvbmVcIilcbiAgcGhvbmVOdW1iZXIuc2V0VGV4dChcIjEtMzQ0LTEyMy02Nzg5XCIpXG5cbiAgLy8gLS0gYWRkcmVzc1xuICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoe2NsYXNzOiAnYWRkcmVzcy1jb250YWluZXInfSwgJ2RpdicpXG4gIGNvbnN0IGFkZHJlc3NIZWFkZXIgPSBuZXcgRWxlbWVudCh7Y2xhc3M6ICdhZGRyZXNzLWhlYWRlcid9LCAnaDInKVxuICBjb25zdCBhZGRyZXNzID0gbmV3IEVsZW1lbnQoe2NsYXNzOiAnYWRkcmVzcyd9LCAnZGl2JylcblxuICBhZGRyZXNzSGVhZGVyLnNldFRleHQoXCJhZGRyZXNzXCIpXG4gIGFkZHJlc3Muc2V0VGV4dChcIjI4NSBCb3VsZXZhcmQgUmRcIilcblxuICAvLyAtLSBob3Vyc1xuICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IG5ldyBFbGVtZW50KHtjbGFzczogJ2hvdXJzLWNvbnRhaW5lcid9LCAnZGl2JylcbiAgY29uc3QgaG91cnNIZWFkZXIgPSBuZXcgRWxlbWVudCh7Y2xhc3M6ICdob3Vycy1oZWFkZXInfSwgJ2gyJylcbiAgY29uc3QgaG91cnMgPSBuZXcgRWxlbWVudCh7Y2xhc3M6ICdob3Vycyd9LCAnZGl2JylcblxuICBob3Vyc0hlYWRlci5zZXRUZXh0KFwiaG91cnNcIilcbiAgaG91cnMuc2V0VGV4dChcIlR1ZXMgLSBUaHVcXG4gMTBhIC0gMTFwXFxuRnJpIC0gU3VuXFxuMTBhIC0gMWFcIilcblxuICBsZXQgbGF5b3V0ID0gW1xuICAgIFtjb250YWluZXIsIGNvbnRhY3RDb250YWluZXIuZWxlbV0sXG4gICAgW2NvbnRhY3RDb250YWluZXIuZWxlbSwgcGhvbmVOdW1iZXJDb250YWluZXIuZWxlbV0sXG4gICAgW3Bob25lTnVtYmVyQ29udGFpbmVyLmVsZW0sIHBob25lSGVhZGVyLmVsZW1dLFxuICAgIFtwaG9uZU51bWJlckNvbnRhaW5lci5lbGVtLCBwaG9uZU51bWJlci5lbGVtXSxcbiAgICBbY29udGFjdENvbnRhaW5lci5lbGVtLCBhZGRyZXNzQ29udGFpbmVyLmVsZW1dLFxuICAgIFthZGRyZXNzQ29udGFpbmVyLmVsZW0sIGFkZHJlc3NIZWFkZXIuZWxlbV0sXG4gICAgW2FkZHJlc3NDb250YWluZXIuZWxlbSwgYWRkcmVzcy5lbGVtXSxcbiAgICBbY29udGFjdENvbnRhaW5lci5lbGVtLCBob3Vyc0NvbnRhaW5lci5lbGVtXSxcbiAgICBbaG91cnNDb250YWluZXIuZWxlbSwgaG91cnNIZWFkZXIuZWxlbV0sXG4gICAgW2hvdXJzQ29udGFpbmVyLmVsZW0sIGhvdXJzLmVsZW1dLFxuICBdXG5cbiAgbGF5b3V0LmZvckVhY2goZWxlbSA9PiBhcHBlbmRUbyhlbGVtWzBdLCBlbGVtWzFdKSlcbn0iLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lcGFnZSdcbmltcG9ydCB7IGNvbnRhY3RQYWdlLCBtZW51UGFnZSB9IGZyb20gJy4vcGFnZXMnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IGhvbWUgPSBob21lUGFnZSgpXG4gIGhvbWUuZGVmYXVsdFZpZXcoKVxuXG4gIGNvbnN0ICQgPSBlbGVtID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSlcblxuICBjb25zdCBjbGVhckNvbnRhaW5lciA9IGNvbnRhaW5lciA9PiB7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xlYXJBY3RpdmVTdGF0dXMgPSBlbGVtID0+IGVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsIGZhbHNlKVxuICBjb25zdCBhZGRBY3RpdmVTdGF0dXMgPSBlbGVtID0+IGVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsIHRydWUpXG5cbiAgY29uc3QgbWVudUl0ZW1zID0ge1xuICAgIGhvbWU6ICAgICQoJy5ob21lJyksIFxuICAgIG1lbnU6ICAgICQoJy5tZW51JyksIFxuICAgIGNvbnRhY3Q6ICQoJy5jb250YWN0JylcbiAgfVxuXG4gIGNvbnN0IGNsZWFyTWVudUl0ZW1zQWN0aXZlU3RhdHVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGl0ZW0gaW4gbWVudUl0ZW1zKSB7XG4gICAgICBjbGVhckFjdGl2ZVN0YXR1cyhtZW51SXRlbXNbaXRlbV0pXG4gICAgfVxuICB9XG5cbiAgJCgnLmhvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhck1lbnVJdGVtc0FjdGl2ZVN0YXR1cygpXG4gICAgY2xlYXJDb250YWluZXIoJCgnLm1haW4tY29udGFpbmVyJykpXG4gICAgaG9tZS5ob21lVmlldygpXG4gICAgYWRkQWN0aXZlU3RhdHVzKG1lbnVJdGVtcy5ob21lKVxuICB9KVxuXG4gICQoJy5jb250YWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJNZW51SXRlbXNBY3RpdmVTdGF0dXMoKVxuICAgIGNsZWFyQ29udGFpbmVyKCQoXCIubWFpbi1jb250YWluZXJcIikpXG4gICAgY29udGFjdFBhZ2UoKVxuICAgIGFkZEFjdGl2ZVN0YXR1cyhtZW51SXRlbXMuY29udGFjdClcbiAgfSkgXG5cbiAgJCgnLm1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhck1lbnVJdGVtc0FjdGl2ZVN0YXR1cygpXG4gICAgY2xlYXJDb250YWluZXIoJCgnLm1haW4tY29udGFpbmVyJykpXG4gICAgbWVudVBhZ2UoKVxuICAgIGFkZEFjdGl2ZVN0YXR1cyhtZW51SXRlbXMubWVudSlcbiAgfSlcbn1cblxubWFpbigpIl0sInNvdXJjZVJvb3QiOiIifQ==