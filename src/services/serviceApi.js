import { Component } from "react";
import { privateApi } from "./axios";
import { endPoints } from "./endpoint";

class Movie extends Component {
  async getPopular() {
    try {
      const response = await privateApi.get(endPoints.popular);
      return { response };
    } catch (error) {
      return { error };
    }
  }

  async getTopRated() {
    try {
      const response = await privateApi.get(endPoints.top_rated);
      return { response };
    } catch (error) {
      return { error };
    }
  }

  async getUpcoming() {
    try {
      const response = await privateApi.get(endPoints.upcoming);
      return { response };
    } catch (error) {
      return { error };
    }
  }

  async getSingle(id) {
    try {
      const response = await privateApi.get(endPoints.getSingle(id));
      return { response };
    } catch (error) {
      return { error };
    }
  }

  async getVIdeos(id) {
    try {
      const response = await privateApi.get(endPoints.getVideo(id));
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async setSingleSimilar(id) {
    try {
      const response = await privateApi.get(endPoints.getSingleSimilar(id));
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getSearchResult(query) {
    try {
      const response = await privateApi.get(endPoints.searchMovie(query));
      return { response };
    } catch (error) {
      return { error };
    }
  }
  async getGenerelSearch(...query) {
    try {
      const response = await privateApi.get(endPoints.generaSearch(query));
      return { response };
    } catch (error) {
      return { error };
    }
  }
}

export { Movie };
